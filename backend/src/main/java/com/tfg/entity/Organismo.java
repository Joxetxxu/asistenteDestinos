package com.tfg.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "ORGANISMOS")
@Data
public class Organismo {

    private @Id String dir3;
    private String unidadOrganica;
    private Integer nivel;
    @Column(name = "dir3_padre")
    private String dir3Padre;

    public Organismo() {
    }
}