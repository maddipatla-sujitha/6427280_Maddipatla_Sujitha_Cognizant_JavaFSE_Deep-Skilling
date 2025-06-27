CREATE OR REPLACE PROCEDURE TransferFunds (
  p_FromAccountID IN NUMBER,
  p_ToAccountID IN NUMBER,
  p_Amount IN NUMBER
) AS
  v_FromBalance NUMBER;
BEGIN
  -- Check balance
  SELECT Balance INTO v_FromBalance FROM accounts WHERE AccountID = p_FromAccountID;

  IF v_FromBalance < p_Amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for transfer.');
  END IF;

  -- Deduct from source
  UPDATE accounts
  SET Balance = Balance - p_Amount
  WHERE AccountID = p_FromAccountID;

  -- Add to destination
  UPDATE accounts
  SET Balance = Balance + p_Amount
  WHERE AccountID = p_ToAccountID;

  DBMS_OUTPUT.PUT_LINE('Transfer successful. Amount ' || p_Amount || 
                       ' moved from Account ' || p_FromAccountID || 
                       ' to Account ' || p_ToAccountID);

  COMMIT;
END;
/

EXEC TransferFunds(101, 102, 500.00);  
