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
@Table(name = "INFOHORARIO")
@Data
public class InfoHorario implements Serializable {
    @Id
    private Long id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private Encuesta encuesta;
    private String horario;
    private String tardesObligatorias;
    private String hayHorarioVerano;
    private String horarioVeranoCondiciones;

    public InfoHorario() {
    }

    
}
