const fs = require("fs");

const arquivoUsuarios = "./usuarios.json";

const carregarUsuarios = () => {
  try {
    const usuarios = fs.readFileSync(arquivoUsuarios);
    return JSON.parse(usuarios);
  } catch (error) {
    return [];
  }
};

const salvarUsuarios = (objetoUsuarios) => {
  fs.writeFileSync(arquivoUsuarios, JSON.stringify(objetoUsuarios));
};

const cadastrarUsuario = (objetoUsuario) => {
  const { nome, email, senha } = objetoUsuario;
  const usuarios = carregarUsuarios();

  const emailUtilizado = usuarios.some((usuario) => usuario.email === email);
  if (emailUtilizado) {
    console.log("Este email já está sendo utilizado.");
    return;
  }

  const novoUsuario = { nome, email, senha };
  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);
  console.log("Usuário cadastrado com sucesso.");
};

const fazerLogin = (email, senha) => {
  const usuarios = carregarUsuarios();
  const loginValidado = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );
  loginValidado
    ? console.log("Login efetuado.")
    : console.log("Usuário ou senha incorretos.");
};

const excluirUsuario = (email, senha) => {
  const usuarios = carregarUsuarios();
  const loginValidado = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );
  if (loginValidado) {
    const usuariosAtualizados = usuarios.filter(
      (usuario) => usuario.email !== email
    );
    salvarUsuarios(usuariosAtualizados);
    console.log("Usuário excluído com sucesso.");
  } else console.log("Usuário ou senha incorretos.");
};

module.exports = { cadastrarUsuario, fazerLogin, excluirUsuario };
