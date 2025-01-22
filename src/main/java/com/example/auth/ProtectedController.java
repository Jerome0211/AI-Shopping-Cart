package com.example.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProtectedController {

    @GetMapping("/protected")
    public String protectedEndpoint() {
        return "This is a protected endpoint! You have access because your JWT token is valid.";
    }
}
