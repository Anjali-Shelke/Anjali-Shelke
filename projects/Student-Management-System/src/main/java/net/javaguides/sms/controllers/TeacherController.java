package net.javaguides.sms.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import net.javaguides.sms.entity.Teacher;
import net.javaguides.sms.service.TeacherService;

@Controller
@RequestMapping("/teachers")
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    // LIST PAGE
    @GetMapping
    public String list(Model model) {
        try {
            model.addAttribute("teachers", teacherService.getAllTeachers());
            return "teachers";
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "error_teacher";
        }
    }

    // CREATE FORM
    @GetMapping("/new")
    public String createForm(Model model) {
        try {
            model.addAttribute("teacher", new Teacher());
            return "create_teacher";
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "error_teacher";
        }
    }

    // SAVE
    @PostMapping
    public String save(@ModelAttribute("teacher") Teacher teacher, Model model) {
        try {
            teacherService.saveTeacher(teacher);
            return "redirect:/teachers";
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "error_teacher";
        }
    }

    // EDIT FORM
    @GetMapping("/edit/{id}")
    public String editForm(@PathVariable Long id, Model model) {
        try {
            Teacher teacher = teacherService.getTeacherById(id);
            if (teacher == null) {
                model.addAttribute("message", "Teacher not found with ID: " + id);
                return "error_teacher";
            }
            model.addAttribute("teacher", teacher);
            return "edit_teacher";
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "error_teacher";
        }
    }

    // UPDATE
    @PostMapping("/{id}")
    public String update(@PathVariable Long id,
                         @ModelAttribute("teacher") Teacher teacher,
                         Model model) {
        try {
            Teacher db = teacherService.getTeacherById(id);
            if (db == null) {
                model.addAttribute("message", "Teacher not found with ID: " + id);
                return "error_teacher";
            }

            db.setFirstName(teacher.getFirstName());
            db.setLastName(teacher.getLastName());
            db.setEmail(teacher.getEmail());
            db.setSubject(teacher.getSubject());

            teacherService.updateTeacher(db);
            return "redirect:/teachers";
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "error_teacher";
        }
    }

    // DELETE
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id, Model model) {
        try {
            Teacher teacher = teacherService.getTeacherById(id);
            if (teacher == null) {
                model.addAttribute("message", "Teacher not found with ID: " + id);
                return "error_teacher";
            }
            teacherService.deleteTeacherById(id);
            return "redirect:/teachers";
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "error_teacher";
        }
    }
}
