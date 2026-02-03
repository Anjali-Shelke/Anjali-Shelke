package net.javaguides.sms.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.repository.AppUserRepository;
import net.javaguides.sms.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

    private final AuthenticationManager authenticationManager;
    private final AppUserRepository userRepository;

    public LoginServiceImpl(AuthenticationManager authenticationManager,
                            AppUserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
    }

    @Override
    public Object loginByEmail(String email, String password) {

        // 🔐 AUTHENTICATE (THIS LINE FIXES 401)
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );

        // 🔁 Fetch user after successful authentication
        AppUsers user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return user; // you can return Student/Teacher later
    }

    @Override
    public Object loginById(Long id, String password) {

        AppUsers user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), password)
        );

        return user;
    }
}

