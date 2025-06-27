package Testing;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
public class VerifyingInteraction {
	 @Test
	    public void testVerifyInteraction() {
	        // Step 1: Create mock
		 ExternalAPI mockApi = mock(ExternalAPI.class);

	        // Step 2: Call method
	        MockingAndStubbing service = new MockingAndStubbing(mockApi);
	        service.fetchData();

	        // Step 3: Verify that getData() was called
	        verify(mockApi).getData();
	    }
}
