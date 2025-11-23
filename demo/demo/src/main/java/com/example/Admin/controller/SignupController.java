package com.example.Admin.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Admin.entity.Student;
import com.example.Admin.repository.StudentRepository;

@Controller
public class SignupController {

    private final StudentRepository studentRepository;

    public SignupController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Signup page
    @GetMapping("/signup")
    public String showSignupPage() {
        return "signup"; // templates/signup.html
    }

    // Save signup info
    @PostMapping("/signup")
    public String registerStudent(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String password,
            Model model) {

        if (studentRepository.findByEmail(email) != null) {
            model.addAttribute("error", "Email already exists!");
            return "signup";
        }

        Student student = new Student(name, email, password);
        studentRepository.save(student);

        model.addAttribute("message", "Signup successful! Please login.");
        return "login"; // redirect to login page
    }


}