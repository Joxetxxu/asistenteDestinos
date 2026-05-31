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
@Table(name = "INFOSALARIO")
@Data
public class InfoSalario implements Serializable {

    @Id
    private Long id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    @JsonIgnore
    private Encuesta encuesta;
    private String hayProductividad;
    private String cuantiaProductividad;
    private String condicionesProductividad;
    private String hayPagaObjetivos;
    private String cuantiaPagaObjetivos;
    private String hayGuardias;
    private String observaciones;

    public InfoSalario() {
    }

}
