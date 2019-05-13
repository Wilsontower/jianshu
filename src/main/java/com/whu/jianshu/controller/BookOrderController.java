package com.whu.jianshu.controller;

import com.whu.jianshu.entity.order.BookOrder;
import com.whu.jianshu.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/order")

public class BookOrderController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    OrderService orderService;

    @DeleteMapping(value = "/delete/{orderId")
    @CrossOrigin
    public void deleteOrder(@PathVariable String orderId){
        orderService.deleteOrder(orderId);
    }

    @GetMapping(value = "/fing/{orderId}")
    @CrossOrigin
    public BookOrder findOrder(@PathVariable String orderId){
        return orderService.getOrderById(orderId);
    }

    @GetMapping(value = "/getAll/{userId}")
    @CrossOrigin
    public List<BookOrder> getAllOrders(@PathVariable String userId) {
        return orderService.getAllOrderByUserId(userId);
    }

    @PostMapping(value = "/add")
    @CrossOrigin
    public  void addOrder(@RequestBody String[] date){
        String orderId = getOrderUUID();
        String bookId = date[0];
        String userId = date[1];
        String shopId = date[2];
        String price = date[3];
        String createtime = getFormatDate();
        String orderState = "代发货";
        BookOrder bookOrder = new BookOrder();
        orderService.addNewOrder(bookOrder);
    }


    public static String getOrderUUID(){
        String uuid = UUID.randomUUID().toString();
        //去掉“-”符号
        uuid = uuid.replaceAll("-", "");
        return uuid;
    }


    public String getFormatDate(){
        Date date = new Date();
        long times = date.getTime();//时间戳
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return formatter.format(date);
    }
}
