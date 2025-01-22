package com.example.auth;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final JwtUtil jwtUtil;
    private final UserService userService;

    public AuthService(JwtUtil jwtUtil, UserService userService) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    public String authenticate(String username, String password) {
        User user = userService.getUserByUsername(username);
        if (user.getPassword().equals(password)) {
            return jwtUtil.generateToken(user.getUsername(), user.getRole());
        }
        throw new RuntimeException("Invalid credentials");
    }

    public String refreshToken(String token) {
        // 检查和解析现有的 Token
        if (jwtUtil.isTokenExpired(token)) {
            String username = jwtUtil.extractUsername(token);
            String role = jwtUtil.extractRole(token);
            return jwtUtil.generateToken(username, role);
        }
        throw new RuntimeException("Token is still valid");
    }
}
