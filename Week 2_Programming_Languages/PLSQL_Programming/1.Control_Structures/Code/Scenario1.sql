BEGIN
  FOR cust_rec IN (
    SELECT CustomerID, Name, LoanInterestRate
    FROM customers
    WHERE Age > 60
  ) LOOP
    UPDATE customers
    SET LoanInterestRate = LoanInterestRate - 0.01
    WHERE CustomerID = cust_rec.CustomerID;

    -- Output message for each updated customer
    DBMS_OUTPUT.PUT_LINE('Customer ' || cust_rec.Name || 
                         ' (ID: ' || cust_rec.CustomerID || ') received a 1% interest discount. ' ||
                         'New Rate: ' || TO_CHAR(cust_rec.LoanInterestRate - 0.01, '0.00') || '%');
  END LOOP;
  
  COMMIT;
END;
SELECT * FROM CUSTOMERS;