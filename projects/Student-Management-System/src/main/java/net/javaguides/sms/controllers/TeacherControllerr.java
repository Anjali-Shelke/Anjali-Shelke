package net.javaguides.sms.controllers;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.sms.entity.Teacher;
import net.javaguides.sms.service.TeacherService;

@RestController
@RequestMapping("/api/teachers")
public class TeacherControllerr {

    private final TeacherService teacherService;

    public TeacherControllerr(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    // ADMIN + TEACHER
    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER')")
    public List<Teacher> getAllTeachers() {
        return teacherService.getAllTeachers();
    }

    // ADMIN + TEACHER
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER')")
    public Teacher getTeacher(@PathVariable Long id) {
        return teacherService.getTeacherById(id);
    }
}
