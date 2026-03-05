package com.ensitech.energytracker.services;

import com.ensitech.energytracker.entities.Consumption;
import com.ensitech.energytracker.repositories.ConsumptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ConsumptionService {
    @Autowired
    private ConsumptionRepository consumptionRepository;

    public Consumption saveConsumption(Consumption consumption) {
        return consumptionRepository.save(consumption);
    }

    public List<Consumption> getConsumptionsByUser(Long userId) {
        return consumptionRepository.findByUserId(userId);
    }
}