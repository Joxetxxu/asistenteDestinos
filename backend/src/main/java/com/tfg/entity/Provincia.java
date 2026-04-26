package com.tfg.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table(name = "PROVINCIAS")
@Data
public class Provincia {
    @Id
    private String CODIGO;
    private String descripcion;

    public Provincia() {
    }
}