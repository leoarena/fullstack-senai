const moduloHTTP = require("http");
const moduloFS = require("fs");

const lerDados = (arquivoJSON) => {
  try {
    const dadosJSON = moduloFS.readFileSync(arquivoJSON, "utf8");
    const objetoDados = JSON.parse(dadosJSON);
    return objetoDados;
  } catch (error) {
    console.log("Erro ao ler arquivo JSON:", error);
    return null;
  }
};

const salvarDados = (arquivoJSON, objetoJS) => {
  try {
    const dadosJSON = JSON.stringify(objetoJS, null, 2);
    moduloFS.writeFileSync(arquivoJSON, dadosJSON, "utf8");
    console.log("Dados salvos com sucesso.");
  } catch (error) {
    console.log("Erro ao salvar dados:", error);
  }
};

const requestHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      const objetoDados = lerDados("./dados.json");
      if (objetoDados !== null) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(objetoDados));
      } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Erro ao ler dados.");
      }
      break;

    case "POST":
      let body = [];
      req.on("data", (chunk) => body.push(chunk));
      req.on("end", () => {
        body = Buffer.concat(body).toString();
        const objetoDadosAtualizados = JSON.parse(body);
        const objetoDados = lerDados("./dados.json");

        if (objetoDados !== null) {
          objetoDados.push(objetoDadosAtualizados);
          salvarDados("./dados.json", objetoDados);

          res.statusCode = 201;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Dados salvos com sucesso." }));
        } else {
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/plain");
          res.end("Erro ao ler dados.");
        }
      });
      break;

    default:
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Método HTTP não suportado.");
      break;
  }
};

const server = moduloHTTP.createServer(requestHandler);

server.listen(3000, (err) => {
  if (err) return console.log("Erro ao inicializar servidor:", err);
  console.log("Servidor escutando na porta 3000");
});
