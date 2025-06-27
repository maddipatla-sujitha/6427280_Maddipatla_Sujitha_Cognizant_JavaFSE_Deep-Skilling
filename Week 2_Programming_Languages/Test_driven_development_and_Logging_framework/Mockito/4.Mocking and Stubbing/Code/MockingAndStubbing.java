package Testing;

public class MockingAndStubbing {
	private ExternalAPI api;

    public MockingAndStubbing(ExternalAPI api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
