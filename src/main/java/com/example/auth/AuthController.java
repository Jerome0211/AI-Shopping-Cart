package com.example.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        try {
            return authService.authenticate(request.getUsername(), request.getPassword());
        } catch (RuntimeException e) {
            return "Error: " + e.getMessage(); // 返回错误消息
        }
    }

    @PostMapping("/refresh")
    public String refreshToken(@RequestHeader("Authorization") String token) {
        try {
            return authService.refreshToken(token.replace("Bearer ", ""));
        } catch (RuntimeException e) {
            return "Error: " + e.getMessage(); // 返回错误消息
        }
    }
}


// DTO for login request
class LoginRequest {
    private String username;
    private String password;

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
