package com.example;

import com.example.auth.AuthService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuthBackendApplication {

    @Autowired
    private AuthService authService; // 通过 Spring 容器注入 AuthService
    public static void main(String[] args) {
        SpringApplication.run(AuthBackendApplication.class, args);
    }
    // 启动后执行测试
    @PostConstruct
    public void testAuthService() {
        try {
            String token = authService.authenticate("user", "password");
            System.out.println("Generated Token: " + token);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }
}