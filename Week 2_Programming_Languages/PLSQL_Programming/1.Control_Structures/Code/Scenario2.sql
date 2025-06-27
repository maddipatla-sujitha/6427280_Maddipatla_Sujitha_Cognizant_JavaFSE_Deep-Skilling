BEGIN
  FOR cust_rec IN (
    SELECT CustomerID, Name, Balance
    FROM customers
    WHERE Balance > 10000
  ) LOOP
    UPDATE customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = cust_rec.CustomerID;

    -- Output message
    DBMS_OUTPUT.PUT_LINE('Customer ' || cust_rec.Name || 
                         ' (ID: ' || cust_rec.CustomerID || ') promoted to VIP. ' ||
                         'Balance: $' || TO_CHAR(cust_rec.Balance, '99999.99'));
  END LOOP;
  
  COMMIT;
END;
