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
@Table(name = "INFOPUESTO")
@Data
public class InfoPuesto implements Serializable {

    @Id
    private Long id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    @JsonIgnore
    private Encuesta encuesta;
    private String nivel;
    private String equipoTIC;
    private String infoSistemas;
    private String infoDesarrollo;
    private String tipoProyectos;
    private String proyectosFuturos;
    private String hayOficinaCalidad;
    private String funciones;
    private String hayQueViejar;

    public InfoPuesto() {
    }

}
