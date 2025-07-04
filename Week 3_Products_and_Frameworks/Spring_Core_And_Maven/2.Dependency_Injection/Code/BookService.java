package service;
import Products.BookRepository;
public class BookService {
	private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("BookService: Calling repository...");
        bookRepository.displayBookInfo();
    }
}
