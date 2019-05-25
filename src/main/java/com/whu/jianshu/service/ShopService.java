package com.whu.jianshu.service;
;
import com.whu.jianshu.entity.shop.Shop;
import com.whu.jianshu.repository.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopService {

    @Autowired
    private ShopRepository shopRepository;

    public Shop addNewShop(Shop shop) {
        return shopRepository.save(shop);
    }

    public List<Shop> getAllShop() {
        return shopRepository.findAll();
    }

    public void deleteShop(String shopId) {
        shopRepository.deleteById(shopId);
    }

    public Shop getShopByUserId(String userId) {
        return shopRepository.findByUserIDIs(userId);
    }

    public Shop getShopByShopId(String shopId) {
        return shopRepository.findByShopIDIs(shopId);
    }

    public Shop updateShop(Shop shop) {
        return shopRepository.saveAndFlush(shop);
    }
}
