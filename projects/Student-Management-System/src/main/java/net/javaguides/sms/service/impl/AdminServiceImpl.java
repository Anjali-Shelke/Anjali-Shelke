package net.javaguides.sms.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import net.javaguides.sms.entity.Student;
import net.javaguides.sms.entity.Teacher;
import net.javaguides.sms.repository.StudentRepository;
import net.javaguides.sms.repository.TeacherRepository;
import net.javaguides.sms.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

    private final StudentRepository studentRepo;
    private final TeacherRepository teacherRepo;

    public AdminServiceImpl(StudentRepository studentRepo,
                            TeacherRepository teacherRepo) {
        this.studentRepo = studentRepo;
        this.teacherRepo = teacherRepo;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    @Override
    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepo.deleteById(id);
    }

    @Override
    public void deleteTeacher(Long id) {
        teacherRepo.deleteById(id);
    }
}
