package com.whu.jianshu.repository;

import com.whu.jianshu.entity.order.BookOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<BookOrder, String> {
    BookOrder findByOrderIDIs(String orderId);
    List<BookOrder> findByUserIDIs(String userId);
    List<BookOrder> findByShopIDIs(String shopId);
}
