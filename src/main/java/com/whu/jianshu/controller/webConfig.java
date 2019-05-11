package com.whu.jianshu.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class webConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //此文件路径是static下的bool
        registry.addResourceHandler("/bookImages/**").addResourceLocations("file:F:/我的大学/06大三下/学习/软件工程/Project/jianshu/src/main/resources/static/bookImages/");
    }
}
