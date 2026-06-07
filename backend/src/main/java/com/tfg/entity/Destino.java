package com.tfg.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Data;

@Data
@Entity
@Table(name = "VISTADESTINOS")
public class Destino implements Serializable {
    @Id
    private String dir3;
    private String organismo;
    private String provincia;
    private Long encuestas;
    private Float sueldoTotal;
    private Long teletrabajo;
    private Long viajar;
    private Long accesible;
    private Long tardes;
    private Long aparamiento;
    private int guarderia;
    @Transient
    private Float mediaPonderada;
    @Transient
    private int orden;

    public String getFiabilidad() {
        if (encuestas < 10) {
            return "Baja";
        } else if (encuestas < 30) {
            return "Media";
        } else {
            return "Alta";
        }
    }

    public String getTeletrabajoPorcentaje() {
        if (encuestas == 0) {
            return "0%";
        }
        return String.format("%.2f%%", (teletrabajo * 100.0 / encuestas));
    }

    public String getViajarPorcentaje() {
        if (encuestas == 0) {
            return "0%";
        }
        return String.format("%.2f%%", (viajar * 100.0 / encuestas));
    }

    public String getAccesiblePorcentaje() {
        if (encuestas == 0) {
            return "0%";
        }
        return String.format("%.2f%%", (accesible * 100.0 / encuestas));
    }

    public String getTardesPorcentaje() {
        if (encuestas == 0) {
            return "0%";
        }
        return String.format("%.2f%%", (tardes * 100.0 / encuestas));
    }

    public String getAparamientoPorcentaje() {
        if (encuestas == 0) {
            return "0%";
        }
        return String.format("%.2f%%", (aparamiento * 100.0 / encuestas));
    }

    public String getGuarderiaPorcentaje() {
        if (encuestas == 0) {
            return "0%";
        }
        return String.format("%.2f%%", (guarderia * 100.0 / encuestas));
    }

}
