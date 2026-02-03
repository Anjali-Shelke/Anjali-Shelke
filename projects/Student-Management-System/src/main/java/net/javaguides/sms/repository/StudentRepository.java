package net.javaguides.sms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.sms.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	 Optional<Student> findByEmail(String email);


	  List<Student> findByFirstName(String firstName);


}
