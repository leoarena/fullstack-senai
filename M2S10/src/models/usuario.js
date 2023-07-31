const { connection } = require("../database/connection");
const { INTEGER, STRING, DATE } = require("sequelize");

const Usuario = connection.define(
  "usuario",
  {
    email: {
      type: STRING,
      allowNull: false,
      unique: { msg: "Email já cadastrado." },
      validate: {
        isEmail: { msg: "Email inválido." },
      },
    },
    senha: {
      type: STRING,
      allowNull: false,
      validate: {
        is: {
          args: /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}/,
          msg: "A senha deve ter no mínimo 8 caracteres, sendo pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.",
        },
      },
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    },
  },
  { underscored: true, paranoid: true }
);

module.exports = { Usuario };
