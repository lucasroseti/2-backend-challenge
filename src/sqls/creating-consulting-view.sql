CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

CREATE TABLE transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id INT NOT NULL,
  transaction_date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL
);

INSERT INTO transactions (account_id, transaction_date, amount) VALUES
(1, '2025-02-01', 6000),
(2, '2025-02-02', 2000),
(1, '2025-02-03', 5000),
(3, '2025-02-04', 3000),
(2, '2025-02-05', 1200.00),
(1, '2025-03-03', 5000);

CREATE VIEW monthly_summary AS
  select account_id, month(transaction_date) as month, sum(amount) as total from transactions
  group by month, account_id;
  
select * from monthly_summary
	where account_id in (select distinct account_id from monthly_summary where total > 10000);

DROP VIEW IF EXISTS monthly_summary;
DROP TABLE IF EXISTS transactions;
