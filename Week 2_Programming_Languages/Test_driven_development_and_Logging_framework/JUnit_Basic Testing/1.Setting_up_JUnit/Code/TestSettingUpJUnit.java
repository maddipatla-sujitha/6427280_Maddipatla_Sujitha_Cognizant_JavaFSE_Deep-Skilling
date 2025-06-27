package Testing;
import org.junit.Test;
import static org.junit.Assert.*;
public class TestSettingUpJUnit {
	SettingUpJUnit calc = new SettingUpJUnit();

    @Test
    public void testAdd() {
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    public void testMultiply() {
        assertEquals(6, calc.multiply(2, 3));
    }
}
