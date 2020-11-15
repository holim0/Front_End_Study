package com.example.demo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;


@RestController
public class hello {

    @GetMapping("/home")
    public String hello(){
        return "안녕하세요. 저는 바보 솔지입니다.\n";
    }


}
