-- Ex. 3
CREATE TABLE projetos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    data_inicio DATE,
    data_prazo DATE
);

-- Ex. 4
CREATE TABLE tarefas (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    data_inicio DATE,
    data_prazo DATE,
    concluida BOOLEAN,
    projeto_id INT, -- Ex. 5
    FOREIGN KEY (projeto_id) REFERENCES projetos(id), -- Ex. 5
    categoria_id INT, -- Ex. 8
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) -- Ex. 8
);

-- Ex. 7
CREATE TABLE categorias (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT
);

-- Ex. 9
INSERT INTO projetos (id, nome, descricao, data_inicio, data_prazo) VALUES
    (1, 'Projeto A', 'Descrição do Projeto A', '2023-01-01', '2023-02-28'),
    (2, 'Projeto B', 'Descrição do Projeto B', '2023-03-01', '2023-04-30'),
    (3, 'Projeto C', 'Descrição do Projeto C', '2023-05-01', '2023-06-30');

-- Ex. 9
INSERT INTO categorias (id, nome, descricao) VALUES
    (1, 'Tarefa pessoal', 'Tarefas relacionadas a assuntos pessoais'),
    (2, 'Tarefa profissional', 'Tarefas relacionadas ao trabalho'),
    (3, 'Tarefa acadêmica', 'Tarefas relacionadas a estudos');

-- Ex. 9
INSERT INTO tarefas (id, nome, descricao, projeto_id, categoria_id, data_inicio, data_prazo, concluida) VALUES
    (1, 'Tarefa 1', 'Descrição da Tarefa 1', 1, 1, '2023-01-05', '2023-01-15', true),
    (2, 'Tarefa 2', 'Descrição da Tarefa 2', 1, 2, '2023-01-10', '2023-01-20', false),
    (3, 'Tarefa 3', 'Descrição da Tarefa 3', 2, 3, '2023-03-05', '2023-03-15', false),
    (4, 'Tarefa 4', 'Descrição da Tarefa 4', 2, 1, '2023-03-10', '2023-03-20', false),
    (5, 'Tarefa 5', 'Descrição da Tarefa 5', 3, 2, '2023-05-05', '2023-05-15', false);

-- Ex. 10
SELECT * FROM tarefas WHERE concluida = true;

SELECT * FROM tarefas WHERE data_prazo < CURRENT_DATE AND concluida = false;

SELECT
    projetos.nome AS projeto,
    COUNT(tarefas.id) AS quantidade_tarefas
FROM projetos
LEFT JOIN tarefas ON projetos.id = tarefas.projeto_id
GROUP BY projetos.id, projetos.nome;