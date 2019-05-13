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

    @GetMapping(value = "/getByUserId/{userId}")
    @CrossOrigin
    public User getByUserId(@PathVariable String userId) {
        User user = userService.getUserById(userId);
        return user;
    }

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

    @GetMapping(value = "/getType/{userId}")
    @CrossOrigin
    public Map<String,Object> getUserType(@PathVariable String userId) {
        String userType = "personal";
        User myUser = userService.getUserById(userId);
        if (myUser!=null){
            userType = myUser.getType();//默认为个人
        }
        Object obj = userType;
        Map<String, Object> infoMap = new HashMap<>();
        infoMap.put("userType",obj);
        return infoMap;
    }

    @PostMapping(value = "/add")
    @CrossOrigin
    public void addUser(@RequestBody String[] data) {
        User myUser = new User();
        myUser.setUserID(data[0]);
        myUser.setPassword(data[1]);
        myUser.setType("personal");//默认为个人
        userService.addNewUser(myUser);
    }

    @PostMapping(value = "/addShopId")
    @CrossOrigin
    public void addShopId(@RequestBody String[] data) {
       String shopId = data[0];
       String userId = data[1];
       User myUser = userService.getUserById(userId);
       myUser.setShopID(shopId);
        userService.updateUser(myUser);
    }

    @GetMapping(value = "/get/{userId}")
    @CrossOrigin
    public String[] getUserByID(@PathVariable String userId){
        User myUser =  userService.getUserById(userId);
        String[] ans = {myUser.getPassword(),myUser.getAge(),myUser.getSchool(),myUser.getAddress(),myUser.getPhone(),myUser.getReceiver(),myUser.getUserInfo()};
        return ans;
    }

    @PostMapping(value = "/update")
    @CrossOrigin
    public void updateUser(@RequestBody String[] data){
        //data 第一项为ID，后为数据
        User myUser = userService.getUserById(data[0]);
        myUser.setPassword(data[1]);
        myUser.setAge(data[2]);
        myUser.setSchool(data[3]);
        myUser.setAddress(data[4]);
        myUser.setPhone(data[5]);
        myUser.setReceiver(data[6]);
        myUser.setUserInfo(data[7]);
        userService.updateUser(myUser);
    }
    @PostMapping(value = "/checkPassword")
    @CrossOrigin
    public String checkPassword(@RequestBody String[] data) {
        String userId = data[0];
        String pwd = data[1];
        String isRight = "false";
        User myUser = userService.getUserById(userId);
        if (myUser.getPassword().equals(pwd)){
            isRight = "true";
        }
        return isRight;

    }


}
