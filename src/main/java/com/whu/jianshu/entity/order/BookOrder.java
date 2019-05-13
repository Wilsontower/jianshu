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

    private String createTime;//创建时间

    private String orderStatus;//订单状态（待发货）  （已发货）  （待评价）

    private String message;//用户留言

    public BookOrder() {
    }


    public BookOrder(String orderID, String bookID, String price, String userID, String shopID, String createTime, String orderStatus, String message) {
        this.orderID = orderID;
        this.bookID = bookID;
        this.price = price;
        this.userID = userID;
        this.shopID = shopID;
        this.createTime = createTime;
        this.orderStatus = orderStatus;
        this.message = message;
    }

    public String getOrderID() {
        return orderID;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public String getBookID() {
        return bookID;
    }

    public void setBookID(String bookID) {
        this.bookID = bookID;
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

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
