package com.whu.jianshu.entity.user;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private String userID;

    private String password;

    private String userInfo;

    private String school;

    private String age;

    private String type;

    private String shopID;

    public User() {
        //空构造函数
    }

    public User(String userID, String password, String userInfo, String school, String age, String type, String shopID) {
        this.userID = userID;
        this.password = password;
        this.userInfo = userInfo;
        this.school = school;
        this.age = age;
        this.type = type;
        this.shopID = shopID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(String userInfo) {
        this.userInfo = userInfo;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getShopID() {
        return shopID;
    }

    public void setShopID(String shopID) {
        this.shopID = shopID;
    }
}
