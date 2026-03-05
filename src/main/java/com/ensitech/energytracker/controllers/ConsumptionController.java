package com.ensitech.energytracker.controllers;

import com.ensitech.energytracker.entities.Consumption;
import com.ensitech.energytracker.services.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/consumptions")
public class ConsumptionController {

    @Autowired
    private ConsumptionService consumptionService;

    @PostMapping("/add")
    public Consumption addConsumption(@RequestBody Consumption consumption) {
        // Cette méthode recevra l'objet avec l'ID du user que tu envoies depuis React
        return consumptionService.saveConsumption(consumption);
    }

    @GetMapping("/user/{userId}")
    public List<Consumption> getByUser(@PathVariable Long userId) {
        // Cette méthode permet au Dashboard d'afficher uniquement les consos du user connecté
        return consumptionService.getConsumptionsByUser(userId);
    }
}