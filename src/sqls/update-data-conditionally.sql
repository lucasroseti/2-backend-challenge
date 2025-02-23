CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE IF NOT EXISTS employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  salary DECIMAL(10,2)
);

INSERT INTO employees (name, salary) VALUES
('João Silva', 3000.00),
('Maria Oliveira', 4500.00),
('Carlos Pereira', 5500.00),
('Ana Souza', 3800.00),
('Fernanda Costa', 6200.00),
('Juliana Santos', 4000.00),
('Lucas Martins', 5000.00),
('Roberto Almeida', 7000.00),
('Patrícia Lima', 5200.00),
('Rafael Ferreira', 6000.00);

update employees set salary = salary * 1.10
  where salary < 5000;

select name, salary from employees;

DROP TABLE IF EXISTS employees;
