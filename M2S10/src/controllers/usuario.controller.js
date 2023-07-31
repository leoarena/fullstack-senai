const { sign } = require("jsonwebtoken");
const { Usuario } = require("../models/usuario");
const { secret } = require("../config/database.config");

class UsuarioController {
  async createOneUsuario(request, response) {
    try {
      const { email, senha } = request.body;

      if (!email) throw new Error("O campo email é obrigatório.");
      if (!senha) throw new Error("O campo senha é obrigatório.");

      const novoUsuario = await Usuario.create({
        email,
        senha,
      });

      return response
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso.", novoUsuario });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError" && error.fields.email)
        return response.status(409).send({
          message: "Não foi possível cadastrar o usuário.",
          cause: error.message,
        });

      return response.status(400).send({
        message: "Não foi possível cadastrar o usuário.",
        cause: error.message,
      });
    }
  }

  async loginUsuario(request, response) {
    try {
      const { email, senha } = request.body;

      if (!email) throw new Error("O campo email é obrigatório.");
      if (!senha) throw new Error("O campo senha é obrigatório.");

      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) throw new Error("Email não encontrado.");
      if (senha !== usuario.senha) throw new Error("Senha incorreta.");

      const payload = {
        id: usuario.id,
        email: usuario.email,
      };
      const token = sign(payload, secret, { expiresIn: "1d" });

      return response
        .status(200)
        .send({ message: "Login efetuado com sucesso.", token });
    } catch (error) {
      if (error.message === "Email não encontrado.")
        return response.status(404).send({
          message: "Erro ao efetuar login.",
          cause: error.message,
        });

      return response.status(400).send({
        message: "Erro ao efetuar login.",
        cause: error.message,
      });
    }
  }
}

module.exports = new UsuarioController();
