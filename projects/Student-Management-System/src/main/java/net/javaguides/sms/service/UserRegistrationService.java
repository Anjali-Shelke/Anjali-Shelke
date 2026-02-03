package net.javaguides.sms.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import net.javaguides.sms.entity.Role;
import net.javaguides.sms.repository.RoleRepository;

import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.entity.Student;
import net.javaguides.sms.entity.Teacher;
import net.javaguides.sms.repository.AppUserRepository;
import net.javaguides.sms.repository.StudentRepository;
import net.javaguides.sms.repository.TeacherRepository;

@Service
public class UserRegistrationService {

    private final AppUserRepository appUserRepo;
    private final StudentRepository studentRepo;
    private final TeacherRepository teacherRepo;
    private final RoleRepository roleRepo;

    private final PasswordEncoder encoder;

    public UserRegistrationService(
            AppUserRepository appUserRepo,
            StudentRepository studentRepo,
            TeacherRepository teacherRepo,
            RoleRepository roleRepo,
            PasswordEncoder encoder) {

        this.appUserRepo = appUserRepo;
        this.studentRepo = studentRepo;
        this.teacherRepo = teacherRepo;
        this.roleRepo = roleRepo;
        this.encoder = encoder;
    }


    // ✅ REGISTER STUDENT
    public Student registerStudent(Student student, String password) {

        if (appUserRepo.findByEmail(student.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        // save student
        Student savedStudent = studentRepo.save(student);

        // fetch the student role entity from DB
        Role studentRole = roleRepo.findByName("STUDENT")
                .orElseThrow(() -> new RuntimeException("Role not found"));

        // create login user
        AppUsers user = new AppUsers();
        user.setEmail(student.getEmail());
        user.setPassword(encoder.encode(password));
        user.setRole(studentRole);  // ✅ assign Role entity

        appUserRepo.save(user);

        return savedStudent;
    }


    // ✅ REGISTER TEACHER
    public Teacher registerTeacher(Teacher teacher, String password) {

        if (appUserRepo.findByEmail(teacher.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        Teacher savedTeacher = teacherRepo.save(teacher);

        Role teacherRole = roleRepo.findByName("TEACHER")
                .orElseThrow(() -> new RuntimeException("Role not found"));

        AppUsers user = new AppUsers();
        user.setEmail(teacher.getEmail());
        user.setPassword(encoder.encode(password));
        user.setRole(teacherRole);

        appUserRepo.save(user);

        return savedTeacher;
    }

}

