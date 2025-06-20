package forecasting;
import java.util.*;
public class FinancialForecast {
	public static double calculateFutureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return calculateFutureValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
    	Scanner obj=new Scanner(System.in);
    	System.out.println("Enter Initial Value");
        double initialValue = obj.nextDouble();
        System.out.println("Enter Growth Rate");
        double growthRate = obj.nextDouble();
        System.out.println("Enter the Time Period");
        int timePeriod = obj.nextInt();

        double result = calculateFutureValue(initialValue, growthRate, timePeriod);

        System.out.printf("Predicted future value after %d years: ₹%.2f%n", timePeriod, result);
    }
}
