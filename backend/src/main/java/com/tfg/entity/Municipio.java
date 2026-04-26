package com.tfg.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "MUNICIPIOS")
@Data
public class Municipio {
    @Id
    private String CODIGO;
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "CODIGO_PROV")
    private Provincia provincia;

    public Municipio() {
    }
}