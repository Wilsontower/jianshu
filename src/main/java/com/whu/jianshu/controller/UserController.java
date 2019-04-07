package com.whu.jianshu.controller;

import com.whu.jianshu.entity.user.User;
import com.whu.jianshu.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin
public class UserController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService userService;

    @DeleteMapping(value = "/delete/{userId}")
    @CrossOrigin
    public void deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
    }

    @GetMapping(value = "/find/{userId}")
    @CrossOrigin
    public String findUser(@PathVariable String userId) {
        String isRepeat = "true";
        User myUser = userService.getUserById(userId);
        if (myUser==null){
            isRepeat = "false";
        }
        return isRepeat;
    }

    @PostMapping(value = "/add")
    @CrossOrigin
    public void addUser(@RequestBody String[] data) {
        User myUser = new User();
        myUser.setId(data[0]);
        myUser.setPassword(data[1]);
        userService.addNewUser(myUser);
    }


}
