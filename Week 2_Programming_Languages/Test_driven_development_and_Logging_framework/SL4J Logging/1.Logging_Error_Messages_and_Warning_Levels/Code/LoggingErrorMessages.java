package Testing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class LoggingErrorMessages {
	private static final Logger logger = LoggerFactory.getLogger(LoggingErrorMessages.class);

    public static void main(String[] args) {
        logger.error("This is an error message");
        logger.warn("This is a warning message");
    }
}
