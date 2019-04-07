package com.whu.jianshu.repository;

import com.whu.jianshu.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, String>{
    User findByIdIs(String id);
}
