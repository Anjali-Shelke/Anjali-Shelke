package net.javaguides.sms.service.impl;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.entity.Role;
import net.javaguides.sms.entity.Teacher;
import net.javaguides.sms.repository.AppUserRepository;
import net.javaguides.sms.repository.RoleRepository;
import net.javaguides.sms.repository.TeacherRepository;
import net.javaguides.sms.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepo;
    private final AppUserRepository appUserRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder encoder;

    public TeacherServiceImpl(
            TeacherRepository teacherRepo,
            AppUserRepository appUserRepo,
            RoleRepository roleRepo,
            PasswordEncoder encoder) {

        this.teacherRepo = teacherRepo;
        this.appUserRepo = appUserRepo;
        this.roleRepo = roleRepo;
        this.encoder = encoder;
    }

    // ================= CRUD =================

    @Override
    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }

    @Override
    public Teacher getTeacherById(Long id) {
        return teacherRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found"));
    }

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepo.save(teacher);
    }

    @Override
    public Teacher updateTeacher(Teacher teacher) {
        return teacherRepo.save(teacher);
    }

    @Override
    public void deleteTeacherById(Long id) {
        teacherRepo.deleteById(id);
    }

    // ================= REGISTRATION =================

    @Override
    @Transactional
    public Teacher registerTeacher(Teacher teacher, String password) {

        // 1️⃣ Fetch ROLE_TEACHER
        Role role = roleRepo.findByName("ROLE_TEACHER")
                .orElseThrow(() -> new RuntimeException("ROLE_TEACHER not found"));

        // 2️⃣ Create App User (Auth table)
        AppUsers user = new AppUsers();
        user.setEmail(teacher.getEmail());
        user.setPassword(encoder.encode(password));
        user.setRole(role);
        user.setEnabled(true);

        AppUsers savedUser = appUserRepo.save(user);

        // 3️⃣ Link teacher with user
        teacher.setUser(savedUser);

        // 4️⃣ Save teacher (Domain table)
        return teacherRepo.save(teacher);
    }
}
