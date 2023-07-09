-- Ex. 2
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    login VARCHAR(50) UNIQUE,
    senha VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    dt_nascimento DATE,
    cpf VARCHAR(11),
    rg VARCHAR(10),
    CONSTRAINT maior_de_idade CHECK (dt_nascimento <= CURRENT_DATE - INTERVAL '18 years')
);

CREATE TABLE Genero (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255)
);

CREATE TABLE Plataforma (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255)
);

CREATE TABLE Jogo (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    dt_lancamento DATE,
    foto VARCHAR(255),
    video VARCHAR(255),
    genero_id INT,
    FOREIGN KEY (genero_id) REFERENCES Genero(id)
);

CREATE TABLE PlataformaJogo (
    plataforma_id INT,
    jogo_id INT,
    FOREIGN KEY (plataforma_id) REFERENCES Plataforma(id),
    FOREIGN KEY (jogo_id) REFERENCES Jogo(id),
    PRIMARY KEY (plataforma_id, jogo_id)
);

CREATE TABLE Biblioteca (
    usuario_id INT,
    jogo_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (jogo_id) REFERENCES Jogo(id),
    PRIMARY KEY (usuario_id, jogo_id)
);