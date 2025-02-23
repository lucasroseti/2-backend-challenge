CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

INSERT INTO users (name, email) VALUES
('João Silva', 'joao.silva@example.com'),
('Maria Oliveira', 'maria.oliveira@example.com'),
('Carlos Pereira', 'carlos.pereira@example.com'),
('Ana Souza', 'ana.souza@example.com'),
('João Silva', 'joao.silva@example.com'),
('Fernanda Costa', 'fernanda.costa@example.com'),
('Juliana Santos', 'juliana.santos@example.com'),
('Carlos Pereira', 'carlos.pereira@example.com'),
('Lucas Martins', 'lucas.martins@example.com'),
('Fernanda Costa', 'fernanda.costa@example.com');

select name, email, count(id) as qtde from users
group by email having count(email) > 1;

DROP TABLE IF EXISTS users;
