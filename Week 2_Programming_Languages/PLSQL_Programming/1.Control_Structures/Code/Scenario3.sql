BEGIN
  FOR loan_rec IN (
    SELECT l.CustomerID, l.DueDate, c.Name
    FROM loans l
    JOIN customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan_rec.Name ||
                         ' (ID: ' || loan_rec.CustomerID || 
                         '), your loan is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY') || '.');
  END LOOP;
END;
