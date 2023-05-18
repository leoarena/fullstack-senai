const moduloHTTP = require("http");
const moduloFS = require("fs");

const requestHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      // lógica do GET
      break;
    case "POST":
      // lógica do POST
      break;
    default:
      // lógica do default
      break;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Teste");
};

const server = moduloHTTP.createServer(requestHandler);
server.listen(3000, (err) => {
  if (err) return console.log("Erro ao inicializar servidor:", err);
  console.log("Servidor escutando na porta 3000");
});

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

const dadosLidos = lerDados("./dados.json");
console.log(dadosLidos);
