package com.whu.jianshu.repository;

import com.whu.jianshu.entity.shopCart.shopCart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface shopCartRepository extends JpaRepository<shopCart, String> {
    List<shopCart> findByUserIDIs(String userId);
}
