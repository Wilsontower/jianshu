package com.whu.jianshu.controller;

import com.whu.jianshu.entity.shop.Shop;
import com.whu.jianshu.service.ShopService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;


@RestController
@RequestMapping(value = "/shop")
@CrossOrigin
public class ShopController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    ShopService shopService;

    @DeleteMapping(value = "/delete/{shopId}")
    @CrossOrigin
    public void deleteUser(@PathVariable String shopId) {
        shopService.deleteShop(shopId);
    }

    @GetMapping(value = "/getByUserId/{userId}")
    @CrossOrigin
    public Shop getByUserId(@PathVariable String userId) {
        Shop myShop = shopService.getShopByUserId(userId);
        return myShop;
    }

    @PostMapping(value = "/update")
    @CrossOrigin
    public void updateShop(@RequestBody String[] data){
        //data 第一项为ID，后为数据
        Shop myShop = shopService.getShopByUserId(data[0]);
        myShop.setShopName(data[1]);
        myShop.setShopInfo(data[2]);
        myShop.setShopType(data[3]);
        myShop.setStatus(data[4]);
        myShop.setAddress(data[5]);
        myShop.setPhone(data[6]);
        shopService.updateShop(myShop);
    }

    @GetMapping(value = "/findByUserId/{userId}")
    @CrossOrigin
    public String findByUserId(@PathVariable String userId) {
        String isExist = "true";
        Shop myShop = shopService.getShopByUserId((userId));
        if (myShop==null){
            isExist = "false";
        }
        return isExist;
    }

    @PostMapping(value = "/create")
    @CrossOrigin
    public void addShop(@RequestBody String[] data) {
        String shopId = getShopUUID();
        String shopName = data[0];
        String shopInfo = data[1];
        String userId = data[2];
        String shopType = data[3];
        String createTime = getFormatDate();
        Shop newShop = new Shop();
        newShop.setShopID(shopId);
        newShop.setShopName(shopName);
        newShop.setShopInfo(shopInfo);
        newShop.setUserID(userId);
        newShop.setShopType(shopType);
        newShop.setCreateTime(createTime);
        newShop.setStatus("open");
        shopService.addNewShop(newShop);
    }

    public static String getShopUUID(){
        String uuid = UUID.randomUUID().toString();
        //去掉“-”符号
        uuid = uuid.replaceAll("-", "");
        String shopUUID = uuid;
        return shopUUID;
    }

    public String getFormatDate(){
        Date date = new Date();
        long times = date.getTime();//时间戳
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = formatter.format(date);
        return dateString;
    }


}
