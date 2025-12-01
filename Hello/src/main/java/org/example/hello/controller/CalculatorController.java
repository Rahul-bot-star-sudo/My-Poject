package org.example.hello.controller;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/calculator")
public class CalculatorController {
    @GetMapping("/test")
    public String test(){
        return "Hello World from Spring Boot!";
    }
    @PostMapping("/add")
    public int add(@RequestParam int a , @RequestParam int b){
        return a+b;
    }
    @PostMapping("/subtract")
    public int subtract(@RequestParam int a , @RequestParam int b){
        return a-b;
    }

}