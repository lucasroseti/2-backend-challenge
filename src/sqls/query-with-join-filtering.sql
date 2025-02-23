/* 2.5 Consulta com JOIN e Filtragem */
/* Dadas as tabelas:
products
id (INT)
name (VARCHAR)
category_id (INT)

categories
id (INT)
name (VARCHAR)

sales
id (INT)
product_id (INT)
quantity (INT)

Escreva uma query para listar o nome da categoria, o nome do produto e a 
quantidade total vendida de cada produto. Filtre apenas as categorias que 
possuem mais de 100 unidades vendidas no total.
*/

CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT,
  name VARCHAR(255) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE sales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO categories (name) VALUES
('Eletrônicos'),
('Roupas'),
('Alimentos'),
('Móveis'),
('Livros');

INSERT INTO products (name, category_id) VALUES
('Smartphone', 1),
('Notebook', 1),
('Camiseta', 2),
('Calça Jeans', 2),
('Arroz', 3),
('Feijão', 3),
('Sofá', 4),
('Mesa de Jantar', 4),
('Harry Potter', 5),
('O Senhor dos Anéis', 5);

INSERT INTO sales (product_id, quantity) VALUES
(1, 150),
(2, 50),
(3, 120),
(4, 80),
(5, 300),
(6, 30),
(7, 130),
(8, 10),
(9, 100),
(10, 90); 

select catg.name, prod.name, sal.quantity from categories catg
  inner join products prod on prod.category_id = catg.id
  inner join sales sal on sal.product_id = prod.id
  where sal.quantity > 100
  order by sal.quantity desc;

DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
