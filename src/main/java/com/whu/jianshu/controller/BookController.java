package com.whu.jianshu.controller;

import com.whu.jianshu.entity.book.Book;
import com.whu.jianshu.entity.user.User;
import com.whu.jianshu.service.BookService;
import com.whu.jianshu.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/book")
@CrossOrigin
public class BookController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    BookService bookService;

    @DeleteMapping(value = "/delete/{bookId}")
    @CrossOrigin
    public void deleteBook(@PathVariable String bookId) { bookService.deleteBook(bookId);
    }

    @GetMapping(value = "/find/{bookId}")
    @CrossOrigin
    public String findUser(@PathVariable String bookId) {
        String isRepeat = "true";
        Book myBook = bookService.getBookById(bookId);
        if (myBook==null){
            isRepeat = "false";
        }
        return isRepeat;
    }


    @PostMapping(value = "/add")
    @CrossOrigin
    public void addBook(@RequestBody String[] data) {
        Book newBook = new Book();
        newBook.setUserID(data[0]);
        bookService.addNewBook(newBook);
    }


}
