package net.javaguides.sms.service;

import java.util.List;

import net.javaguides.sms.entity.Student;
import net.javaguides.sms.entity.Teacher;

public interface AdminService {

    List<Student> getAllStudents();
    List<Teacher> getAllTeachers();

    void deleteStudent(Long id);
    void deleteTeacher(Long id);
}
