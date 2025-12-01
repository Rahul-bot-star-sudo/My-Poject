package org.example.form.controller;

import org.example.form.dto.Student;
import org.example.form.dto.StudentResponse;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin("*")
public class StudentController {
    @PostMapping("student")
    public StudentResponse saveStudent(@RequestBody Student student){
        System.out.println("Name: "+ student.getName());
        System.out.println("Email: "+ student.getEmail());
        System.out.println("Age: "+ student.getAge());
        return new StudentResponse(
                "student saved successfully",
                "ok"
        );
    }
}
