package com.webshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.webshop.dto.LoginDto;
import com.webshop.model.User;
import com.webshop.repository.UserRepository;

/**
 * UserServiceImpl
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bEncoder;

    public User authenticateUser(LoginDto loginDto) {
        User loggedUser = userRepository.findByUsername(loginDto.getUsername());

        if (loggedUser != null && bEncoder.matches(loginDto.getPassword(), loggedUser.getPassword()))
            return loggedUser;
        else
            return null;

    }

}
