package com.tfg.entity;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

public class aaaa {

    @OneToOne
    @JoinColumn(name = "ID")
    private InfoServicios infoServicios;

    @OneToOne
    @JoinColumn(name = "ID")
    private InfoTeletrabajo infoTeletrabajo;

    @OneToOne
    @JoinColumn(name = "ID")
    private InfoInstalaciones infoInstalaciones;

    @OneToOne
    @JoinColumn(name = "ID")
    private InfoMovilidad invomMovilidad;

    @OneToOne
    @JoinColumn(name = "ID")
    private InfoPuesto infoPuesto;

    @OneToOne
    @JoinColumn(name = "ID")
    private InfoSalario infoSalario;

 @OneToOne
    @JoinColumn(name = "ID")
    private InfoHorario infoHorario;

}
