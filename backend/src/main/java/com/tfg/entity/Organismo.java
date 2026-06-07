package com.tfg.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "ORGANISMOS")
@Data
public class Organismo {

    private @Id
    String dir3;
    private String unidadOrganica;
    private Integer nivel;

    //@OneToOne
    //@JoinColumn(name = "dir3_padre")
    //private Organismo organoPadre;

    public Organismo() {
    }
}