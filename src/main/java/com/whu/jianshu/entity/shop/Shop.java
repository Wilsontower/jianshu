package com.whu.jianshu.entity.shop;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Shop {

    @Id
    private String shopID;//唯一标识符

    private String userID;//和用户关联

    private String shopName;//店铺名称

    private String shopInfo;//店铺简介

    private String shopType;//店铺类型 personal(个人) , shop(商店)

    private String createTime;//创建时间

    private String status;//店铺状态 open(营业) , stop（停业） ,close（关闭）

    private String phone;//联系电话

    private String address;//地址

    public Shop() {
        //空构造函数
    }


    public Shop(String shopID, String userID, String shopName, String shopInfo, String shopType, String createTime, String status, String phone, String address) {
        this.shopID = shopID;
        this.userID = userID;
        this.shopName = shopName;
        this.shopInfo = shopInfo;
        this.shopType = shopType;
        this.createTime = createTime;
        this.status = status;
        this.phone = phone;
        this.address = address;
    }

    public String getShopID() {
        return shopID;
    }

    public void setShopID(String shopID) {
        this.shopID = shopID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopInfo() {
        return shopInfo;
    }

    public void setShopInfo(String shopInfo) {
        this.shopInfo = shopInfo;
    }

    public String getShopType() {
        return shopType;
    }

    public void setShopType(String shopType) {
        this.shopType = shopType;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
