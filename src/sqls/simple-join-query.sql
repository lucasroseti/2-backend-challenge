/* 2.4 Consulta com JOIN Simples */
/* Dadas as tabelas: orders

id (INT)
customer_id (INT)
total (DECIMAL)

customers
id (INT)
name (VARCHAR)
country (VARCHAR)

Escreva uma query para listar o nome dos clientes e o total de 
compras realizadas, ordenando pelo total de compras em ordem decrescente. 
Inclua apenas os clientes que realizaram compras.
*/

CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(255)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT,
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

INSERT INTO customers (name, country) VALUES
('João Silva', 'Brasil'),
('Maria Oliveira', 'Portugal'),
('Carlos Souza', 'Brasil'),
('Ana Costa', 'Brasil'),
('Luis Pereira', 'Argentina'),
('Eduardo Mendes', 'Brasil'),
('Fernanda Lima', 'México'),
('Ricardo Torres', 'Colômbia'),
('Juliana Santos', 'Brasil'),
('Paula Martins', 'Chile');

INSERT INTO orders (customer_id, total) VALUES
(1, 750.75),
(1, 150.00),
(2, 320.50),
(6, 540.30),
(8, 120.00),
(8, 420.00),
(7, 1120.00),
(9, 810.00);

select cust.name, sum(ord.total) as total from customers cust
  inner join orders ord on ord.customer_id = cust.id
  group by customer_id
  order by ord.total desc;

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
