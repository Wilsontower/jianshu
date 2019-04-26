package com.whu.jianshu.repository;

import com.whu.jianshu.entity.shop.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopRepository extends JpaRepository<Shop, String> {
    Shop findByShopIDIs(String shopId);
    Shop findByUserIDIs(String userId);
}
