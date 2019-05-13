package com.whu.jianshu.entity.order;

import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class BookOrder {
    @Id
    private String orderID;//唯一标识符

    private String bookID;//与书关联

    private String price;//价格

    private String bookName;//书名

    private String bookInfo;//书的信息

    private String imageUrl;//书的图片Url

    private String userID;//和用户关联

    private String shopID;//和店铺关联

    private String createTime;//创建时间

    private String orderStatus;///订单状态 ap(Awaiting payment),tbd(To be delivered待发货) ,
    // ar（Awaiting receive待收货）,wfc（Waiting for comment待评价），return(退货)，rs(退货成功)

    private String message;//用户留言

    private String comment;//用户评论

    public BookOrder() {
    }

    public BookOrder(String orderID, String bookID, String price, String bookName, String bookInfo, String imageUrl, String userID, String shopID, String createTime, String orderStatus, String message, String comment) {
        this.orderID = orderID;
        this.bookID = bookID;
        this.price = price;
        this.bookName = bookName;
        this.bookInfo = bookInfo;
        this.imageUrl = imageUrl;
        this.userID = userID;
        this.shopID = shopID;
        this.createTime = createTime;
        this.orderStatus = orderStatus;
        this.message = message;
        this.comment = comment;
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

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookInfo() {
        return bookInfo;
    }

    public void setBookInfo(String bookInfo) {
        this.bookInfo = bookInfo;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
