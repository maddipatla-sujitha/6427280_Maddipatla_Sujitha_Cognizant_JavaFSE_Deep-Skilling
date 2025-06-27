-- Create customers table
CREATE TABLE customer (
    CustomerID      NUMBER PRIMARY KEY,
    Name            VARCHAR2(100),
    Age             NUMBER,
    Balance         NUMBER(10,2),
    LoanInterestRate NUMBER(5,2),
    IsVIP           VARCHAR2(5) DEFAULT 'FALSE'
);

-- Create loans table
CREATE TABLE loan (
    LoanID          NUMBER PRIMARY KEY,
    CustomerID      NUMBER,
    DueDate         DATE,
    FOREIGN KEY (CustomerID) REFERENCES customers(CustomerID)
);
-- Insert sample data into customers
INSERT INTO customers (CustomerID, Name, Age, Balance, LoanInterestRate)
VALUES (1, 'John Doe', 65, 12000.00, 5.50);

INSERT INTO customers (CustomerID, Name, Age, Balance, LoanInterestRate)
VALUES (2, 'Jane Smith', 45, 8000.00, 6.00);

INSERT INTO customers (CustomerID, Name, Age, Balance, LoanInterestRate)
VALUES (3, 'Robert Brown', 70, 15000.00, 4.75);

INSERT INTO customers (CustomerID, Name, Age, Balance, LoanInterestRate)
VALUES (4, 'Alice Johnson', 30, 3000.00, 6.25);

-- Insert sample data into loans
INSERT INTO loans (LoanID, CustomerID, DueDate)
VALUES (101, 1, SYSDATE + 15);

INSERT INTO loans (LoanID, CustomerID, DueDate)
VALUES (102, 2, SYSDATE + 45);

INSERT INTO loans (LoanID, CustomerID, DueDate)
VALUES (103, 3, SYSDATE + 5);

INSERT INTO loans (LoanID, CustomerID, DueDate)
VALUES (104, 4, SYSDATE - 1);

COMMIT;
SELECT * FROM CUSTOMERS;
SELECT * FROM LOANS;