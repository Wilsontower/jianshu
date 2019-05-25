package com.whu.jianshu.service;

import com.whu.jianshu.entity.shopCart.shopCart;
import com.whu.jianshu.repository.shopCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class shopCartService {
    @Autowired
    private shopCartRepository shopCartRepository;

    public shopCart addNewCart(shopCart cart){return shopCartRepository.save(cart);}

    public void deleteCart(String cartID) {
        shopCartRepository.deleteById(cartID);
    }

    public List<shopCart> getCartsByUserId(String userID) {
        return shopCartRepository.findByUserIDIs(userID);
    }

    public shopCart updateCart(shopCart cart) {
        return shopCartRepository.saveAndFlush(cart);
    }
}
