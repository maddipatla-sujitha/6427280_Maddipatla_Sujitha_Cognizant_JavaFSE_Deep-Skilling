CREATE TABLE accounts (
    AccountID    NUMBER PRIMARY KEY,
    CustomerID   NUMBER,
    AccountType  VARCHAR2(20),  -- e.g., 'Savings', 'Current'
    Balance      NUMBER(10,2)
);
CREATE TABLE employees (
    EmployeeID    NUMBER PRIMARY KEY,
    Name          VARCHAR2(100),
    Department    VARCHAR2(50),
    Salary        NUMBER(10,2)
);
-- Insert sample accounts
INSERT INTO accounts (AccountID, CustomerID, AccountType, Balance) VALUES (101, 1, 'Savings', 5000.00);
INSERT INTO accounts (AccountID, CustomerID, AccountType, Balance) VALUES (102, 2, 'Savings', 10000.00);
INSERT INTO accounts (AccountID, CustomerID, AccountType, Balance) VALUES (103, 3, 'Current', 3000.00);
INSERT INTO accounts (AccountID, CustomerID, AccountType, Balance) VALUES (104, 4, 'Savings', 7000.00);
-- Insert sample employees
INSERT INTO employees (EmployeeID, Name, Department, Salary) VALUES (201, 'Alice', 'Finance', 50000);
INSERT INTO employees (EmployeeID, Name, Department, Salary) VALUES (202, 'Bob', 'HR', 45000);
INSERT INTO employees (EmployeeID, Name, Department, Salary) VALUES (203, 'Charlie', 'Finance', 52000);
INSERT INTO employees (EmployeeID, Name, Department, Salary) VALUES (204, 'Diana', 'IT', 60000);
INSERT INTO employees (EmployeeID, Name, Department, Salary) VALUES (205, 'Eve', 'HR', 47000);
COMMIT;
SELECT * FROM ACCOUNTS;
