package com.ensitech.energytracker.controllers;

import com.ensitech.energytracker.entities.User;
import com.ensitech.energytracker.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Pour autoriser React à appeler l'API
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody User user) {
        try {
            User savedUser = authService.register(user);
            return ResponseEntity.ok("Utilisateur enregistré avec succès !");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erreur : Email déjà utilisé.");
        }
    }
}