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

-- Ex. 4
SELECT Nome_do_filme, Duracao_do_filme_em_minutos
FROM Filme
WHERE Nome_do_filme LIKE '%Ação'
ORDER BY Duracao_do_filme_em_minutos;

-- Ex. 5
SELECT P.nome_pais, E.nome_estado, C.nome_cidade
FROM Cidade AS C
JOIN Estado AS E ON C.id_estado = E.id_estado
JOIN Pais AS P ON E.id_pais = P.id_pais
WHERE C.capital = 'True'
    AND C.qtd_populacao > 500000
    AND (E.nome_estado LIKE 'São%' OR E.nome_estado LIKE 'Santo%' OR E.nome_estado LIKE 'San%' OR E.nome_estado LIKE 'Saint%')
    AND P.continente IN ('América do Norte', 'América Central', 'América do Sul')
ORDER BY P.nome_pais, E.nome_estado, C.nome_cidade;

-- Ex. 6
SELECT P.nome_pais, SUM(C.qtd_populacao) AS populacao_total
FROM Pais AS P
JOIN Estado AS E ON P.id_pais = E.id_pais
JOIN Cidade AS C ON E.id_estado = C.id_estado
WHERE P.continente = 'Europa' AND E.nome_estado = 'Espanha'
GROUP BY P.nome_pais
HAVING SUM(C.qtd_populacao) < (
    SELECT SUM(C2.qtd_populacao)
    FROM Cidade AS C2
    JOIN Estado AS E2 ON C2.id_estado = E2.id_estado
    WHERE E2.nome_estado = 'Espanha'
)
ORDER BY populacao_total DESC;