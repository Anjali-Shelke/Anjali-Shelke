package net.javaguides.sms.service.impl;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.entity.Role;
import net.javaguides.sms.entity.Student;
import net.javaguides.sms.repository.AppUserRepository;
import net.javaguides.sms.repository.RoleRepository;
import net.javaguides.sms.repository.StudentRepository;
import net.javaguides.sms.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepo;
    private final AppUserRepository appUserRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder encoder;

    public StudentServiceImpl(
            StudentRepository studentRepo,
            AppUserRepository appUserRepo,
            RoleRepository roleRepo,
            PasswordEncoder encoder) {

        this.studentRepo = studentRepo;
        this.appUserRepo = appUserRepo;
        this.roleRepo = roleRepo;
        this.encoder = encoder;
    }

    // ================= CRUD =================

    @Override
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public Student updateStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public void deleteStudentById(Long id) {
        studentRepo.deleteById(id);
    }

    // ================= REGISTRATION =================

    @Override
    @Transactional
    public Student registerStudent(Student student, String password) {

        Role role = roleRepo.findByName("ROLE_STUDENT")
                .orElseThrow(() -> new RuntimeException("ROLE_STUDENT not found"));

        AppUsers user = new AppUsers();
        user.setEmail(student.getEmail());
        user.setPassword(encoder.encode(password));
        user.setRole(role);
        user.setEnabled(true);

        AppUsers savedUser = appUserRepo.save(user);

        student.setUser(savedUser);

        return studentRepo.save(student);
    }
}
