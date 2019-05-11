package com.whu.jianshu.repository;

import com.whu.jianshu.entity.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, String> {
    Order findByOrderIDIs(String orderId);
    List<Order> findByUserIDIs(String userId);
    List<Order> findByShopIDIs(String shopId);
}
