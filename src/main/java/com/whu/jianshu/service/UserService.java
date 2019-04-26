package com.whu.jianshu.service;

import com.whu.jianshu.entity.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.whu.jianshu.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User addNewUser(User user) {
        return userRepository.save(user);
    }


    public void deleteUser(String userID) {
        userRepository.deleteById(userID);
    }

    public User getUserById(String id) {
        return userRepository.findByUserIDIs(id);
    }

    public User updateUser(User user) {
        return userRepository.saveAndFlush(user);
    }
}
