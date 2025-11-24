package com.example.Admin.controller;

import org.springframework.web.bind.annotation.*;
import com.example.Admin.entity.Student;
import com.example.Admin.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")  // important
public class UserController {


    @Autowired
    private StudentRepository studentRepository;  // lowercase variable


    @PostMapping("/login")
    public String login(@RequestBody Student student) {
        Student existingStudent = studentRepository.findByEmail(student.getEmail());
        if (existingStudent != null && existingStudent.getPassword().equals(student.getPassword())) {
            return "Welcome " + existingStudent.getName() + "!";
        }
        return "Invalid email or password!";
    }


}
