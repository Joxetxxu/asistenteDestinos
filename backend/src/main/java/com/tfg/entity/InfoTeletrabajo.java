package com.tfg.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "INFOTELETRABAJO")
@Data
public class InfoTeletrabajo implements Serializable {

    @Id
    private Long id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    @JsonIgnore
    private Encuesta encuesta;
    private String hayTeletrabajo;
    private String requisitos;
    private String dias;
    private String otraCCAA;
    private String conciliacion;

    public InfoTeletrabajo() {
    }

}
