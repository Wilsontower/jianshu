package com.whu.jianshu.service;


import com.whu.jianshu.entity.book.Book;
import com.whu.jianshu.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book addNewBook(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBook(String bookID) {
        bookRepository.deleteById(bookID);
    }

    public Book getBookById(String bookID) {
        return bookRepository.findByBookIDIs(bookID);
    }

    public Book updateBook(Book book) {
        return bookRepository.saveAndFlush(book);
    }

    public List<Book> getAllBookByUserId(String userId) {
        return bookRepository.findByUserIDIs(userId);
    }

    public List<Book> getAllBook() {
        return bookRepository.findAll();
    }
}
