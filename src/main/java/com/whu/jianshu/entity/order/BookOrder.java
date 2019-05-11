package com.whu.jianshu.entity.order;

import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class BookOrder {
    @Id
    private String orderID;//唯一标识符

    private String bookID;//与书关联

    private String price;//价格

    private String userID;//和用户关联

    private String shopID;//和店铺关联

    private String uploadTime;//创建时间

    private String orderStatus;//订单状态（代发货）  （已发货）  （待评价）

    public BookOrder() {
    }

    public BookOrder(String orderID, String bookID, String price, String userID, String shopID, String uploadTime, String orderStatus){
        this.bookID = orderID;
        this.orderID = orderID;
        this.price = price;
        this.userID = userID;
        this.shopID = shopID;
        this.uploadTime = uploadTime;
        this.orderStatus = orderStatus;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public String getOrderID() {
        return orderID;
    }

    public String getBookID() {
        return bookID;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getShopID() {
        return shopID;
    }

    public void setShopID(String shopID) {
        this.shopID = shopID;
    }

    public String getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(String uploadTime) {
        this.uploadTime = uploadTime;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }
}