package com.ensitech.energytracker.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "consumptions")
@Data
public class Consumption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // ELECTRICITY, WATER, GAS
    private Double value;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    // INDISPENSABLE : Pour créer la colonne user_id en base
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}