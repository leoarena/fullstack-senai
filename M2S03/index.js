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

const requestHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      const dados = lerDados("./dados.json");
      if (dados !== null) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(dados));
      } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Erro ao ler dados.");
      }
      break;

    case "POST":
      // lógica do POST
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
