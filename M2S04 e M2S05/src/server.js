const express = require("express");
const app = express();
const rotas = require("./routes");
const porta = 3333;

app.use(express.json());
app.use(rotas);
app.listen(porta, () => console.log(`Servidor escutando na porta ${porta}.`));
