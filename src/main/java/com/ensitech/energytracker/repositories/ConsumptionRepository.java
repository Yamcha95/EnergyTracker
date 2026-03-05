package com.ensitech.energytracker.repositories;

import com.ensitech.energytracker.entities.Consumption;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ConsumptionRepository extends JpaRepository<Consumption, Long> {
    List<Consumption> findByUserId(Long userId); // Pour n'afficher que les consos de l'utilisateur connecté
}