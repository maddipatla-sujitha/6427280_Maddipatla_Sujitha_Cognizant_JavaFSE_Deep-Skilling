package Search;

import java.util.Arrays;
import java.util.Comparator;
import java.util.*;
public class Search{
	    public static int linearSearch(Product[] products, int targetId) {
	        for (int i = 0; i < products.length; i++) {
	            if (products[i].getProductId() == targetId) {
	                return i;
	            }
	        }
	        return -1;
	    }

	    public static int binarySearch(Product[] products, int targetId) {
	        int left = 0;
	        int right = products.length - 1;

	        while (left <= right) {
	            int mid = left + (right - left) / 2;
	            int midId = products[mid].getProductId();

	            if (midId == targetId) {
	                return mid;
	            } else if (midId < targetId) {
	                left = mid + 1;
	            } else {
	                right = mid - 1;
	            }
	        }

	        return -1;
	    }

	    public static void main(String[] args) {
	    	Scanner obj = new Scanner(System.in);
	        System.out.print("Enter number of products: ");
	        int n = obj.nextInt();
	        obj.nextLine();
	        Product[] products = new Product[n];
	        for (int i = 0; i < n; i++) {
	            System.out.println("Enter details for product " + (i + 1) + ":");

	            System.out.print("Product ID: ");
	            int id = obj.nextInt();
	            obj.nextLine();
	            System.out.print("Product Name: ");
	            String name = obj.nextLine();
	            System.out.print("Category: ");
	            String category = obj.nextLine();

	            products[i] = new Product(id, name, category);
	        }
	        System.out.print("Target Id: ");
	        int targetId = obj.nextInt();

	        // Linear Search
	        int linearResult = linearSearch(products, targetId);
	        if (linearResult != -1) {
	            System.out.println("Linear Search: Product Found: " + products[linearResult].getProductName()+ ", Category: "+ products[linearResult].getCategory());
	        } else {
	            System.out.println("Linear Search: Product not found.");
	        }

	        // Binary Search: SORT FIRST
	        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

	        int binaryResult = binarySearch(products, targetId);
	        if (binaryResult != -1) {
	            System.out.println("Binary Search: Product Found: " + products[binaryResult].getProductName()+ ", Category: "+products[binaryResult].getCategory());
	        } else {
	            System.out.println("Binary Search: Product not found.");
	        }
	    }
	}
