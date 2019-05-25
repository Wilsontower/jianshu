package com.whu.jianshu.controller;

import com.whu.jianshu.entity.shopCart.shopCart;
import com.whu.jianshu.entity.book.Book;
import com.whu.jianshu.service.shopCartService;
import com.whu.jianshu.service.BookService;
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
@RequestMapping(value = "/cart")
public class shopCartController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    shopCartService cartService;
    BookService bookService;

    @DeleteMapping(value = "/delete/{cartId}")
    @CrossOrigin
    public void deleteCart(@PathVariable String cartId){
        cartService.deleteCart(cartId);
    }

    @PostMapping(value = "/deleteAll")
    @CrossOrigin
    public void deleteAll(@RequestBody String[] data){
        for( String id : data){
            cartService.deleteCart(id);
        }
    }

    @GetMapping(value = "/getAllByUserID/{userId}")
    @CrossOrigin
    public List<shopCart> getAllByUserID(@PathVariable String userId) {
        return cartService.getCartsByUserId(userId);
    }

    @PostMapping(value = "/add")
    @CrossOrigin
    public void  addCart(@RequestBody String[] data) {
        String cartId = getUUID();
        shopCart cart = new shopCart(cartId,data[0],data[1],data[2],data[3],data[4],data[5]);
        cartService.addNewCart(cart);
    }

    public static String getUUID(){
        String uuid = UUID.randomUUID().toString();
        //去掉“-”符号
        uuid = uuid.replaceAll("-", "");
        return uuid;
    }
}
