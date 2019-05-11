package com.whu.jianshu.service;

import com.whu.jianshu.entity.order.Order;
import com.whu.jianshu.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order addNewOrder(Order Order){return orderRepository.save(Order);}
    public void deleteOrder(String orderID) {
        orderRepository.deleteById(orderID);
    }

    public Order getOrderById(String orderID) {
        return orderRepository.findByOrderIDIs(orderID);
    }

    public Order updateOrder(Order order) {
        return orderRepository.saveAndFlush(order);
    }

    public List<Order> getAllOrderByUserId(String userId) {
        return orderRepository.findByUserIDIs(userId);
    }
}
