package com.tfg.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "INFOINSTALACIONES")
@Data
public class InfoInstalaciones implements Serializable {

    @Id
    private Long id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private Encuesta encuesta;
    private String accesibles;
    private String hayDuchas;
    private String bañoAdaptado;
    private String gimnasio;
    private String otros;

    public InfoInstalaciones() {
    }

}
