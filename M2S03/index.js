const moduloHTTP = require("http");
const moduloFS = require("fs");

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Teste");
};

const server = moduloHTTP.createServer(requestHandler);
server.listen(3000, (err) => {
  if (err) return console.log("Erro ao inicializar servidor:", err);
  console.log("Servidor escutando na porta 3000");
});
