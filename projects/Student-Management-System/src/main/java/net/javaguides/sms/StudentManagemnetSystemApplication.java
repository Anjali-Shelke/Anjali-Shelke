package net.javaguides.sms;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;

import jakarta.transaction.Transactional;
import net.javaguides.sms.entity.Address;
import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.entity.Role;
import net.javaguides.sms.entity.Student;
import net.javaguides.sms.entity.Teacher;
import net.javaguides.sms.repository.AddressRepository;
import net.javaguides.sms.repository.AppUserRepository;
import net.javaguides.sms.repository.RoleRepository;
import net.javaguides.sms.repository.StudentRepository;
import net.javaguides.sms.repository.TeacherRepository;

@EnableMethodSecurity(prePostEnabled = true)
@SpringBootApplication(scanBasePackages = "net.javaguides.sms")
public class StudentManagemnetSystemApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(StudentManagemnetSystemApplication.class, args);
    }

    private static final Logger logger =
            LoggerFactory.getLogger(StudentManagemnetSystemApplication.class);

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public void run(String... args) {

        // ================= FETCH ROLE ONCE =================
    	  // 1️⃣ ROLE CREATION (FIRST)
        Role teacherRole = roleRepository.findByName("ROLE_TEACHER")
                .orElseGet(() -> {
                    Role role = new Role();
                    role.setName("ROLE_TEACHER");
                    return roleRepository.save(role);
                });

     // ADMIN ROLE
     Role adminRole = roleRepository.findByName("ROLE_ADMIN")
             .orElseGet(() -> {
                 Role role = new Role();
                 role.setName("ROLE_ADMIN");
                 return roleRepository.save(role);
             }); 
     
     Role studentRole = roleRepository.findByName("ROLE_STUDENT")
    	        .orElseGet(() -> {
    	            Role role = new Role();
    	            role.setName("ROLE_STUDENT");
    	            return roleRepository.save(role);
    	        });

        // =================================================
        // 1️⃣ MANY-TO-ONE (STUDENT → TEACHER)
        // =================================================

        String email2 = "Rahul@gmail.com";
        Teacher existingTeacher2 = teacherRepository.findByEmail(email2).orElse(null);

        if (existingTeacher2 == null) {

            AppUsers teacherUser = new AppUsers();
            teacherUser.setEmail(email2);
            teacherUser.setPassword(passwordEncoder.encode("password123"));
            teacherUser.setRole(teacherRole); // ✅ FIXED

            teacherUser = appUserRepository.save(teacherUser);

            Teacher teacher2 = new Teacher(
                    "Rahul",
                    "Patil",
                    email2,
                    "Math"
            );

            teacher2.setUser(teacherUser);

            Student s2 = new Student(
                    "Rahul1",
                    "Patil1",
                    "rahul1@example.com"
            );

            teacher2.addStudent(s2);
            teacherRepository.save(teacher2);

            logger.info("✔ Teacher and student saved successfully.");
        }

        // =================================================
        // 2️⃣ ONE-TO-MANY (STUDENT → ADDRESSES)
        // =================================================

        List<Student> checkStudents2 =
                studentRepository.findByFirstName("Rahuladdress");

        if (checkStudents2.isEmpty()) {

            Student st2 = new Student(
                    "Rahuladdress",
                    "PatilAddress",
                    "rahuladdress@email.com"
            );

            Address a3 = new Address("Pune", "Chinchwad", "Maharashtra", "411033");
            Address a4 = new Address("Pune1", "Chinchwad1", "Maharashtra", "411044");

            st2.addAddress(a3);
            st2.addAddress(a4);

            studentRepository.save(st2);

            logger.info("✔ Student with multiple addresses created.");
        }

        // =================================================
        // 3️⃣ TEACHER → ADDRESSES (WITH USER)
        // =================================================

        List<Teacher> checkTeachers =
                teacherRepository.findByFirstName("TeacherAddress");

        if (checkTeachers.isEmpty()) {

            AppUsers teacherUser2 = new AppUsers();
            teacherUser2.setEmail("teacheraddress@email.com");
            teacherUser2.setPassword(passwordEncoder.encode("password123"));
            teacherUser2.setRole(teacherRole); // ✅ FIXED

            teacherUser2 = appUserRepository.save(teacherUser2);

            Teacher t = new Teacher(
                    "TeacherAddress",
                    "Lastname",
                    "teacheraddress@email.com",
                    "Mathematics"
            );

            t.setUser(teacherUser2);

            Address ta1 = new Address("MG Road", "Mumbai", "Maharashtra", "400001");
            Address ta2 = new Address("Central Mall", "Nashik", "Maharashtra", "422003");

            t.addAddress(ta1);
            t.addAddress(ta2);

            teacherRepository.save(t);

            logger.info("✔ Teacher with addresses saved successfully!");
        }

        logger.info("============================================");
        logger.info("APPLICATION DATA LOADED SUCCESSFULLY");
        logger.info("============================================");
    }
}
