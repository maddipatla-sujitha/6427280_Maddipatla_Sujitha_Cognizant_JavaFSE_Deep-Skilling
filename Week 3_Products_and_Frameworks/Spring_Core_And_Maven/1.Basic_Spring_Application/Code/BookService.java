package service;

import Products.BookRepository;

public class BookService {

    private BookRepository bookRepository = new BookRepository();  // 🔴 Hardcoded dependency

    public void displayService() {
        System.out.println("BookService: Calling repository...");
        bookRepository.displayBookInfo();
    }
}
