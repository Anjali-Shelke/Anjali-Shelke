package net.javaguides.sms.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import net.javaguides.sms.entity.AppUsers;
import net.javaguides.sms.entity.Permission;
import net.javaguides.sms.repository.AppUserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AppUserRepository repository;

    public CustomUserDetailsService(AppUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        AppUsers user = repository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found"));

        // 1️⃣ Role as authority (ROLE_ADMIN, ROLE_TEACHER, ROLE_STUDENT)
        String roleAuthority = user.getRole().getName();

        // 2️⃣ Permissions as authorities
        String[] permissionAuthorities =
                user.getRole()
                    .getPermissions()
                    .stream()
                    .map(Permission::getName)
                    .toArray(String[]::new);

        // 3️⃣ Merge ROLE + PERMISSIONS
        String[] authorities = new String[permissionAuthorities.length + 1];
        authorities[0] = roleAuthority;
        System.arraycopy(permissionAuthorities, 0, authorities, 1,
                permissionAuthorities.length);

        return User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities(authorities)
                .disabled(!user.isEnabled())
                .build();
    }
}
