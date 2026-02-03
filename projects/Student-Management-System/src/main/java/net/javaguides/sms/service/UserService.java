package net.javaguides.sms.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import net.javaguides.sms.dto.RegisterRequest;
import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.entity.Role;
import net.javaguides.sms.repository.AppUserRepository;
import net.javaguides.sms.repository.RoleRepository;

@Service
public class UserService {

    private final AppUserRepository appUserRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder encoder;

    public UserService(
            AppUserRepository appUserRepo,
            RoleRepository roleRepo,
            PasswordEncoder encoder) {

        this.appUserRepo = appUserRepo;
        this.roleRepo = roleRepo;
        this.encoder = encoder;
    }

    public void register(RegisterRequest req, String roleName) {

        // 1️⃣ Fetch Role entity
        Role role = roleRepo.findByName(roleName)
                .orElseThrow(() ->
                        new RuntimeException(roleName + " not found"));

        // 2️⃣ Create App User
        AppUsers user = new AppUsers();
        user.setEmail(req.getEmail());
        user.setPassword(encoder.encode(req.getPassword()));
        user.setRole(role);
        user.setEnabled(true);

        appUserRepo.save(user);
    }
}
