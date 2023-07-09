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

-- Ex. 3
INSERT INTO Genero (nome)
VALUES ('Simulação'), ('Ação'), ('FPS'), ('Estratégia'), ('Outros');

INSERT INTO Plataforma (nome)
VALUES ('PS1'), ('PS2'), ('PS3'), ('PS4'), ('PS5'), ('Xbox Series S'), ('Xbox Series X'), ('PC');

INSERT INTO Jogo (nome, dt_lancamento, foto, video, genero_id)
VALUES ('The Sims 4 Base', '2014-09-02', 'caminho_da_foto', 'caminho_do_video', 1);

INSERT INTO PlataformaJogo (plataforma_id, jogo_id)
VALUES (4, 1), (5, 1), (8, 1);

INSERT INTO Usuario (nome, login, senha, email, dt_nascimento, cpf, rg)
VALUES ('Derpson da Silva', 'derpinho', 'derpinho91', 'derpinho91@hotmail.com', '12312312312', '4123123', '1991-01-01');

INSERT INTO Biblioteca (usuario_id, jogo_id)
VALUES (1, 1);