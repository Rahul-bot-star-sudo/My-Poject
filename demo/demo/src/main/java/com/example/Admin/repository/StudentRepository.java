package com.example.Admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Admin.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByEmail(String email); // Login ke liye email check

}
