package com.ensitech.energytracker.controllers;

import com.ensitech.energytracker.entities.User;
import com.ensitech.energytracker.repositories.UserRepository;
import com.ensitech.energytracker.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*") // Autorise le Frontend React à communiquer avec le Backend
@RestController
@RequestMapping("/api/auth") // Définit le préfixe de l'URL : http://localhost:8080/api/auth
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors().get(0).getDefaultMessage());
        }
        try {
            return ResponseEntity.ok(authService.register(user));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erreur lors de l'inscription : " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        // Log pour vérifier dans la console IntelliJ que la requête arrive
        System.out.println("Requête de login reçue pour : " + loginRequest.getEmail());

        // 1. Chercher l'utilisateur par email
        Optional<User> foundUser = userRepository.findByEmail(loginRequest.getEmail());

        if (foundUser.isPresent()) {
            // 2. Vérifier le mot de passe (clair vs haché)
            if (passwordEncoder.matches(loginRequest.getPassword(), foundUser.get().getPassword())) {
                System.out.println("✅ Connexion réussie pour " + loginRequest.getEmail());
                return ResponseEntity.ok(foundUser.get()); // Renvoie l'utilisateur avec son ID
            } else {
                System.out.println("❌ Mot de passe incorrect pour " + loginRequest.getEmail());
                return ResponseEntity.status(401).body("Mot de passe incorrect");
            }
        }

        System.out.println("❌ Utilisateur non trouvé : " + loginRequest.getEmail());
        return ResponseEntity.status(404).body("Utilisateur non trouvé");
    }
}