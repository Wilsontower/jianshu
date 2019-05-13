package com.whu.jianshu.service;

import com.whu.jianshu.entity.order.BookOrder;
import com.whu.jianshu.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public BookOrder addNewOrder(BookOrder order){return orderRepository.save(order);}
    public void deleteOrder(String orderID) {
        orderRepository.deleteById(orderID);
    }

    public BookOrder getOrderById(String orderID) {
        return orderRepository.findByOrderIDIs(orderID);
    }

    public BookOrder updateOrder(BookOrder order) {
        return orderRepository.saveAndFlush(order);
    }

    public List<BookOrder> getAllOrderByUserId(String userId) {
        return orderRepository.findByUserIDIs(userId);
    }
    public List<BookOrder> getAllOrderByShopId(String userId) {
        return orderRepository.findByShopIDIs(userId);
    }
}
