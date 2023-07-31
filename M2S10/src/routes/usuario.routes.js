const { Router } = require("express");
const { auth } = require("../middlewares/auth");
const {
  createOneUsuario,
  loginUsuario,
} = require("../controllers/usuario.controller");

class UsuarioRouter {
  routesFromUsuario() {
    const usuarioRoutes = Router();
    usuarioRoutes.post("/createOneUsuario", createOneUsuario);
    usuarioRoutes.post("/loginUsuario", loginUsuario);
    return usuarioRoutes;
  }
}

module.exports = new UsuarioRouter();
