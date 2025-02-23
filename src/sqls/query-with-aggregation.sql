/* 2.1 Consulta com Agregação */
/* Dada a tabela sales com as colunas: 
id (INT)
product (VARCHAR)
quantity (INT)
price (DECIMAL)

Escreva uma query para calcular a receita total (quantity * price) para 
cada produto, ordenando por receita total em ordem decrescente.
*/

CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE IF NOT EXISTS sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product VARCHAR(255),
  quantity INT,
  price DECIMAL(10, 2)
);

INSERT INTO sales (product, quantity, price) VALUES
('Notebook', 10, 2500.00),
('Smartphone', 25, 1200.00),
('Fones de Ouvido', 50, 150.00),
('Teclado Mecânico', 30, 450.00),
('Monitor 24"', 20, 800.00),
('Mouse Gamer', 40, 100.00),
('Impressora Laser', 18, 900.00),
('Smartwatch', 22, 650.00),
('SSD 1TB', 28, 350.00),
('Caixa de Som Bluetooth', 60, 130.00);

select product, (quantity * price) as total  from sales
group by total desc;

DROP TABLE IF EXISTS sales;
