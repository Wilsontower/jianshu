package com.whu.jianshu.repository;

import com.whu.jianshu.entity.book.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {
    Book findByBookIDIs(String bookId);
    Book[] findByShopIDIs(String shopId);
}
