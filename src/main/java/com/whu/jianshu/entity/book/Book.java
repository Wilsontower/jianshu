package com.whu.jianshu.entity.book;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {

    @Id
    private String bookID;//唯一标识符

    private String bookPrice;//价格

    private String userID;//和用户关联

    private String shopID;//和店铺关联

    private String bookInfo;//书籍简介

    private String bookType;//类型很多种

    private String uploadTime;//创建时间

    private String shopStatus;//书籍在书店的状态 onsale(在售) , stop（停售）,sold（已售）

    private String transportStatus;//书籍在售出后的状态 ap(Awaiting payment),tbd(To be delivered) ,
                                    // ar（Awaiting receive）,wfc（Waiting for comment），return(退货)，rs(退货成功)
    public Book() {
    }


    public Book(String bookID, String bookPrice, String userID, String shopID, String bookInfo, String bookType, String uploadTime, String shopStatus, String transportStatus) {
        this.bookID = bookID;
        this.bookPrice = bookPrice;
        this.userID = userID;
        this.shopID = shopID;
        this.bookInfo = bookInfo;
        this.bookType = bookType;
        this.uploadTime = uploadTime;
        this.shopStatus = shopStatus;
        this.transportStatus = transportStatus;
    }

    public String getBookID() {
        return bookID;
    }

    public void setBookID(String bookID) {
        this.bookID = bookID;
    }

    public String getBookPrice() {
        return bookPrice;
    }

    public void setBookPrice(String bookPrice) {
        this.bookPrice = bookPrice;
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

    public String getBookInfo() {
        return bookInfo;
    }

    public void setBookInfo(String bookInfo) {
        this.bookInfo = bookInfo;
    }

    public String getBookType() {
        return bookType;
    }

    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    public String getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(String uploadTime) {
        this.uploadTime = uploadTime;
    }

    public String getShopStatus() {
        return shopStatus;
    }

    public void setShopStatus(String shopStatus) {
        this.shopStatus = shopStatus;
    }

    public String getTransportStatus() {
        return transportStatus;
    }

    public void setTransportStatus(String transportStatus) {
        this.transportStatus = transportStatus;
    }

}
