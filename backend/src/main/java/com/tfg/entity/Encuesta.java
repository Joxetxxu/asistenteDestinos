package com.tfg.entity;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "ENCUESTAS")
@Data
public class Encuesta implements Serializable {

    @Id
    private Long id;
    private String nombre;
    private Date fechaRealizacion;
    private Date fechaIncorporacion;
    private Long estado;

    @OneToOne
    @JoinColumn(name = "ID_DIRECCION")
    private Direccion direccion;

    @OneToOne
    @JoinColumn(name = "ID_ORGANISMO")
    private Organismo organismo;

    @OneToOne(mappedBy = "encuesta")
    private InfoHorario infoHorario;

    @OneToOne(mappedBy = "encuesta")
    private InfoServicios infoServicios;

    @OneToOne(mappedBy = "encuesta")
    private InfoTeletrabajo infoTeletrabajo;

    @OneToOne(mappedBy = "encuesta")
    private InfoInstalaciones infoInstalaciones;
    @OneToOne(mappedBy = "encuesta")
    private InfoMovilidad infoMovilidad;

    @OneToOne(mappedBy = "encuesta")
    private InfoPuesto infoPuesto;

    @OneToOne(mappedBy = "encuesta")
    private InfoSalario infoSalario;

    public Encuesta() {
    }

}
