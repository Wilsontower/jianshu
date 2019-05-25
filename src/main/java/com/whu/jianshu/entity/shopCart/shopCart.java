package com.whu.jianshu.entity.shopCart;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class shopCart {

    @Id
    private String cartID;//唯一标识符

    private String bookID;

    private String userID;

    private String bookName;

    private String bookInfo;

    private String bookPrice;

    private String imageUrl;

    public shopCart() {
        //空构造函数
    }


    public shopCart(String cartID, String bookID, String userID,String bookName,String bookInfo,String bookPrice,String imageUrl) {
        this.cartID = cartID;
        this.bookID = bookID;
        this.userID = userID;
        this.bookName = bookName;
        this.bookInfo = bookInfo;
        this.bookPrice = bookPrice;
        this.imageUrl = imageUrl;
    }

    public String getCartID() {
        return cartID;
    }

    public void setCartID(String cartID) {
        this.cartID = cartID;
    }

    public String getBookID() {
        return bookID;
    }

    public void setBookID(String userID) {
        this.bookID = bookID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
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

    public String getBookPrice() {
        return bookPrice;
    }

    public void setBookPrice(String bookPrice) {
        this.bookPrice = bookPrice;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}