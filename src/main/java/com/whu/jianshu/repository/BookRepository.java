package com.whu.jianshu.repository;

import com.whu.jianshu.entity.book.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, String> {
    Book findByBookIDIs(String bookId);
    List<Book> findByUserIDIs(String userId);
}
