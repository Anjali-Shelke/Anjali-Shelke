package net.javaguides.sms.controllers;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.sms.dto.LoginRequest;
import net.javaguides.sms.dto.RegisterRequest;
import net.javaguides.sms.security.JwtUtil;
import net.javaguides.sms.service.UserService;
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserService userService;

    public AuthController(AuthenticationManager authenticationManager,
                          JwtUtil jwtUtil,
                          UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    // REGISTER
    @PostMapping("/register/admin")
    public ResponseEntity<?> registerAdmin(@RequestBody RegisterRequest req) {
        userService.register(req, "ROLE_ADMIN");
        return ResponseEntity.ok("Admin registered");
    }

    @PostMapping("/register/teacher")
    public ResponseEntity<?> registerTeacher(@RequestBody RegisterRequest req) {
        userService.register(req, "ROLE_TEACHER");
        return ResponseEntity.ok("Teacher registered");
    }

    @PostMapping("/register/student")
    public ResponseEntity<?> registerStudent(@RequestBody RegisterRequest req) {
        userService.register(req, "ROLE_STUDENT");
        return ResponseEntity.ok("Student registered");
    }
    
    @GetMapping("/me")
    public ResponseEntity<?> me() {
        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        return ResponseEntity.ok(Map.of(
                "email", auth.getName(),
                "roles", auth.getAuthorities()
        ));
    }


    // LOGIN (ALL ROLES)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        String role = auth.getAuthorities().iterator().next().getAuthority();

        String token = jwtUtil.generateToken(request.getEmail(), role);

        return ResponseEntity.ok(Map.of(
                "token", token,
                "email", request.getEmail(),
                "role", role
        ));
    }
}
