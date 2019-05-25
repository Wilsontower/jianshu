package com.whu.jianshu.controller;

import com.whu.jianshu.entity.book.Book;
import com.whu.jianshu.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping(value = "/book")
@CrossOrigin
public class BookController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    BookService bookService;

    @DeleteMapping(value = "/delete/{bookId}")
    @CrossOrigin
    public void deleteBook(@PathVariable String bookId) { bookService.deleteBook(bookId);
    }

    @GetMapping(value = "/getByBookId/{bookId}")
    @CrossOrigin
    public Book getByBookId(@PathVariable String bookId) {
       Book book = bookService.getBookById(bookId);
        return book;
    }

    @GetMapping(value = "/getAll")
    @CrossOrigin
    public List<Book> getAllBook() {
        List<Book> allBook = bookService.getAllBook();
        return allBook;
    }


    @GetMapping(value = "/stopSale/{bookId}")
    @CrossOrigin
    public Book stopSale(@PathVariable String bookId) {
        Book book = bookService.getBookById(bookId);
        book.setShopStatus("stop");
        bookService.updateBook(book);
        return book;
    }

    @GetMapping(value = "/startSale/{bookId}")
    @CrossOrigin
    public Book startSale(@PathVariable String bookId) {
        Book book = bookService.getBookById(bookId);
        book.setShopStatus("onsale");
        bookService.updateBook(book);
        return book;
    }


    @GetMapping(value = "/offShelf/{bookId}")
    @CrossOrigin
    public void offShelf(@PathVariable String bookId) {
        bookService.deleteBook(bookId);
        String filePath = "F:\\我的大学\\06大三下\\学习\\软件工程\\Project\\jianshu\\src\\main\\resources\\static\\bookImages\\"+bookId+".jpg";
//        String userDir = System.getProperties().getProperty("user.dir");
//        String filePath = userDir + "/bookImages/"+bookId+".jpg";
        File result = new File(filePath);//要写入的图片
        result.delete();
    }

    @GetMapping(value = "/find/{bookId}")
    @CrossOrigin
    public String findUser(@PathVariable String bookId) {
        String isRepeat = "true";
        Book myBook = bookService.getBookById(bookId);
        if (myBook==null){
            isRepeat = "false";
        }
        return isRepeat;
    }

    @GetMapping(value = "/getAll/{userId}")
    @CrossOrigin
    public List<Book> getAllBooks(@PathVariable String userId) {
        List<Book> allBook = bookService.getAllBookByUserId(userId);
        return allBook;
    }

    @GetMapping(value = "/getAllBook")
    @CrossOrigin
    public List<Book> getAllBooks() {
        List<Book> allBook = bookService.getAllBook();
        return allBook;
    }


    @PostMapping(value = "/add")
    @CrossOrigin
    public Map<String,Object> addBook(@RequestBody String[] data) {
        Book newBook = new Book();
        String bookId = getbookUUID();
        String bookName = data[0];
        String bookInfo = data[1];
        String bookPrice = data[2];
        String userId = data[3];
        String shopId = data[4];
        String shopStatus  = "onsale";
        String uploadTime = getFormatDate();



        newBook.setBookID(bookId);
        newBook.setBookName(bookName);
        newBook.setBookInfo(bookInfo);
        newBook.setBookPrice(bookPrice);
        newBook.setUserID(userId);
        newBook.setShopID(shopId);
        newBook.setShopStatus(shopStatus);
        newBook.setUploadTime(uploadTime);

        bookService.addNewBook(newBook);

        Object obj = bookId;
        Map<String, Object> infoMap = new HashMap<>();
        infoMap.put("bookId",obj);
        return infoMap;
    }

    @RequestMapping(value = "/addImage/{bookId}")
    @CrossOrigin
    public void addImage(@RequestParam(value = "file") MultipartFile file,@PathVariable String bookId) {

        Book book = bookService.getBookById(bookId);
        //这里的path是本地的，到时候要替换成服务器上的地址，每个人可以根据情况先替换这个
        String filePath = "F:\\我的大学\\06大三下\\学习\\软件工程\\Project\\jianshu\\src\\main\\resources\\static\\bookImages\\"+bookId+".jpg";
        String imageSrc = "/bookImages/"+bookId+".jpg";
//        String userDir = System.getProperties().getProperty("user.dir");
//        String filePath = userDir + "/bookImages/"+bookId+".jpg";
//        String imageSrc = "/bookImages/"+bookId+".jpg";
        book.setImageUrl(imageSrc);
        bookService.updateBook(book);
        File result = new File(filePath);//要写入的图片
        try {
            result.createNewFile();
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }



    private static String getbookUUID(){
        String uuid = UUID.randomUUID().toString();
        //去掉“-”符号
        uuid = uuid.replaceAll("-", "");
        String bookUUID = uuid;
        return bookUUID;
    }

    private String getFormatDate(){
        Date date = new Date();
        long times = date.getTime();//时间戳
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = formatter.format(date);
        return dateString;
    }


}
