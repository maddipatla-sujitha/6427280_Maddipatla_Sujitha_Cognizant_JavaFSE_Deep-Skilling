package Testing;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
public class TestAAA {
	private AAA calculator;

    // 🔧 Setup method (runs before each test)
    @Before
    public void setUp() {
        calculator = new AAA();
        System.out.println("Setup complete");
    }

    // 🧹 Teardown method (runs after each test)
    @After
    public void tearDown() {
    	calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testDivide() {
        // Arrange
        int a = 10;
        int b = 2;

        // Act
        int result = calculator.divide(a, b);

        // Assert
        assertEquals(5, result);
    }
}
