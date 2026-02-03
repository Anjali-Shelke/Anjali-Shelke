package net.javaguides.sms.controllers;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.sms.entity.Student;
import net.javaguides.sms.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentControllerr {

    private final StudentService studentService;

    public StudentControllerr(StudentService studentService) {
        this.studentService = studentService;
    }

    // ADMIN + TEACHER + STUDENT
    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER','STUDENT')")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    // ADMIN + TEACHER + STUDENT
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER','STUDENT')")
    public Student getStudent(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }
}
