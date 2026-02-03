package net.javaguides.sms.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import net.javaguides.sms.entity.Student;
import net.javaguides.sms.exception.DuplicateEmailException;
import net.javaguides.sms.exception.InvalidIdException;
import net.javaguides.sms.exception.StudentNotFoundException;
import net.javaguides.sms.service.StudentService;

@Controller
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
	


    // LIST ALL STUDENTS
    @GetMapping("/students")
    public String listStudents(Model model) {
        model.addAttribute("students", studentService.getAllStudents());
        return "students";
    }
   

    // CREATE STUDENT FORM
    @GetMapping("/students/new")
    public String createStudentForm(Model model) {
        model.addAttribute("student", new Student());
        return "create_student";
    }

    // SAVE STUDENT
    @PostMapping("/students")
    public String saveStudent(@ModelAttribute("student") Student student, Model model) {

        try {
            studentService.saveStudent(student);
            return "redirect:/students";

        } catch (DuplicateEmailException ex) {
            model.addAttribute("errorMsg", ex.getMessage());
            model.addAttribute("student", student);  // keep entered data
            return "create_student";   // return to form page
        }
    }

    // EDIT STUDENT FORM
    @GetMapping("/students/edit/{id}")
    public String editStudentForm(@PathVariable Long id, Model model) {

        try {
            Student student = studentService.getStudentById(id);
            model.addAttribute("student", student);
            return "edit_student";

        } catch (StudentNotFoundException ex) {
            model.addAttribute("message", ex.getMessage());
            return "error_page";   // custom error page
        }
    }

    // UPDATE STUDENT
    @PostMapping("/students/{id}")
    public String updateStudent(@PathVariable Long id,
                                @ModelAttribute("student") Student student,
                                Model model) {
        try {
            Student existingStudent = studentService.getStudentById(id);

            existingStudent.setId(id);
            existingStudent.setFirstName(student.getFirstName());
            existingStudent.setLastName(student.getLastName());
            existingStudent.setEmail(student.getEmail());

            studentService.updateStudent(existingStudent);
            return "redirect:/students";

        } catch (StudentNotFoundException ex) {
            model.addAttribute("message", ex.getMessage());
            return "error_page";
        }
    }

    // DELETE STUDENT
    @GetMapping("/students/{id}")
    public String deleteStudent(@PathVariable Long id, Model model) {

        try {
            studentService.getStudentById(id); // check before delete
            studentService.deleteStudentById(id);
            return "redirect:/students";

        } catch (StudentNotFoundException ex) {
            model.addAttribute("message", ex.getMessage());
            return "error_page";
        }
    }

    // REST API GET STUDENT (JSON)
    @GetMapping("/student/{id}")
    public ResponseEntity<?> getStudent(@PathVariable Long id) {

        try {
            Student student = studentService.getStudentById(id);
            return ResponseEntity.ok(student);

        } catch (StudentNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(ex.getMessage());
        }
    }

    // GLOBAL HANDLER FOR THIS CONTROLLER
    @ExceptionHandler(StudentNotFoundException.class)
    public String handleStudentNotFound(StudentNotFoundException ex, Model model) {
        model.addAttribute("message", ex.getMessage());
        return "error_page";
    }
    @ExceptionHandler(DuplicateEmailException.class)
    public String handleDuplicateEmail(DuplicateEmailException ex, Model model) {
        model.addAttribute("errorMsg", ex.getMessage());
        return "error_page";  // your custom HTML page
    }
    @ExceptionHandler(InvalidIdException.class)
    public String handleInvalidId(InvalidIdException ex, Model model) {
        model.addAttribute("errorMessage", ex.getMessage());
        return "error_page";
    }

}
