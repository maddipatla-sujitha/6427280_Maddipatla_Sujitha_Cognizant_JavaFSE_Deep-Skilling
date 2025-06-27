package Testing;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
public class TestMockingAndStubbing {
	@Test
    public void testExternalApi() {
        // Step 1: Create a mock object
        ExternalAPI mockApi = Mockito.mock(ExternalAPI.class);

        // Step 2: Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into service
        MockingAndStubbing service = new MockingAndStubbing(mockApi);

        // Step 4: Run and verify
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
