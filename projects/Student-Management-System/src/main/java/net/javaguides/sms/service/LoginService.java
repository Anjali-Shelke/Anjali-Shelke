package net.javaguides.sms.service;

public interface LoginService {

    Object loginByEmail(String email, String password);

    Object loginById(Long id, String password);
}
