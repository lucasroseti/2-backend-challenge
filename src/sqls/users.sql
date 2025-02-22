/* 2.2 Identificar Registros Duplicados */
/* Dada a tabela users com as colunas:
id (INT)
email (VARCHAR)
name (VARCHAR)

Escreva uma query para identificar os emails que estão duplicados, 
juntamente com o número de ocorrências.
*/

CREATE DATABASE IF NOT EXISTS sales_db;

USE sales_db;

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
