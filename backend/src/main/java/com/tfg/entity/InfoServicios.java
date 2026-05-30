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
@Table(name = "INFOSERVICIOS")
@Data
public class InfoServicios implements Serializable {

    @Id
    private Long id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private Encuesta encuesta;
    private String hayApartamiento;
    private String hayCargador;
    private String condicionesParking;
    private String hayAparcabicis;
    private String hayAutobuses;
    private String hayComedor;
    private String hayCafeteria;
    private String precioMenu;
    private String hayGuarderia;
    private String cuantiaGuarderia;
    @OneToOne
    @JoinColumn(name = "ID_DIRECCION")
    private Direccion direccion;

    public InfoServicios() {
    }

}
