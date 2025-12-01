package org.example.hello.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "hello from rahul";
    }

    @GetMapping("/")   // Root URL mapping
    public String home() {
        return "<h1>Hello World from Spring Boot!</h1>"
                + "<a href='/calculator/test' target='_blank'>Go to Google</a>";

    }
}
