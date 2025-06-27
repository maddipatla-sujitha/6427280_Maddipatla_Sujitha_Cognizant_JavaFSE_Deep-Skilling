SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc_rec IN (
    SELECT AccountID, Balance
    FROM accounts
    WHERE AccountType = 'Savings'
  ) LOOP
    UPDATE accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = acc_rec.AccountID;

    DBMS_OUTPUT.PUT_LINE('Interest added to Account ID ' || acc_rec.AccountID || 
                         '. New Balance: ' || TO_CHAR(acc_rec.Balance * 1.01, '99999.99'));
  END LOOP;

  COMMIT;
END;
/
EXEC ProcessMonthlyInterest;


