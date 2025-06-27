CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_Department IN VARCHAR2,
  p_BonusPercent IN NUMBER  -- e.g., pass 10 for 10%
) AS
BEGIN
  FOR emp_rec IN (
    SELECT EmployeeID, Name, Salary
    FROM employees
    WHERE Department = p_Department
  ) LOOP
    UPDATE employees
    SET Salary = Salary + (Salary * p_BonusPercent / 100)
    WHERE EmployeeID = emp_rec.EmployeeID;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || emp_rec.Name || 
                         ' (ID: ' || emp_rec.EmployeeID || ') in ' || p_Department || 
                         '. New Salary: ' || TO_CHAR(emp_rec.Salary * (1 + p_BonusPercent / 100), '99999.99'));
  END LOOP;

  COMMIT;
END;
/
EXEC UpdateEmployeeBonus('Finance', 10);  

