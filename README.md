## Project Overview
This project demonstrates a backend authentication service using Spring Boot and JWT. It provides secure, stateless authentication for RESTful APIs and includes a simple HTML-based UI for testing login and token validation.

---

## Features
- **Login API**: Authenticates users and generates JWT tokens.
- **Protected API**: Validates JWT tokens to secure endpoints.
- **Stateless Authentication**: Uses JWT for scalable, stateless user authentication.
- **Testing UI**: Includes a minimal HTML file for testing login functionality.

---

## Technologies Used
- **Programming Language**: Java 17
- **Frameworks**: Spring Boot 3, Spring Security
- **Libraries**: JWT (io.jsonwebtoken)
- **Build Tool**: Maven
- **UI**: HTML (Testing purposes only)

---

## Prerequisites
Before building and running the project, ensure the following are installed on your system:
- **JDK**: Version 17 or higher
- **Maven**: Installed and configured

---

## Folder Structure

- **`frontend`**:
  - Contains the React frontend implementation.
  - Includes public assets and source code.

- **`src/main/java/com/example/auth`**:
  - `AuthController.java`: Handles user login.
  - `AuthService.java`: Provides authentication logic.
  - `JwtUtil.java`: Generates and validates JWT tokens.
  - `SecurityConfig.java`: Configures Spring Security.
  - `JwtAuthenticationFilter.java`: Verifies JWT in requests.
  - `UserRepository.java`: Manages user data persistence.

- **`src/main/resources`**:
  - `ui/index.html`: HTML form for login testing.
  - `application.properties`: Application configurations.

---

## How to Build and Run

### Build the Project
- **1.Navigate to the project directory:**
  ```bash
  cd AWS-Project

- **2.Run the Maven build command:**
  ```bash
  mvn spring-boot:run

## How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jerome0211/AWS-Project.git
   cd AWS-Project

2. **Test the APIs**:
  - Open the file src/main/resources/ui/index.html in a browser.
  - Use the form to test login and token validation.

## API Endpoints
  **Login API**
   - Endpoint: /auth/login
   - Method: POST
   - Request Body:
       {
          "username": "user",
          "password": "password"
        }
   - Response:
        ```
            {
              "token": "<jwt-token>"
            } 
## Protected API
   - Endpoint: /protected
   - Method: GET
   - Headers: Authorization: Bearer <jwt-token>
   - Response:
       ```
          {
            "message": "This is a protected resource"
          }

## Notes
   - The included index.html is a placeholder UI for testing and not intended for production use.
   - User credentials are hardcoded for demonstration purposes.
