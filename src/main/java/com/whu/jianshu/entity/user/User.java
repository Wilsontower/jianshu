package com.whu.jianshu.entity.user;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    String id;

    String password;

    String school;

    String age;

    String type;

    public User() {
        //空构造函数
    }

    //构造函数
    public User(String id, String password, String school, String age, String type) {
        this.id = id;
        this.password = password;
        this.school = school;
        this.age = age;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

}
