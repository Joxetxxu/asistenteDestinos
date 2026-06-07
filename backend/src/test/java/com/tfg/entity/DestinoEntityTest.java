package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DestinoEntityTest {

    @Test
    void porcentajeAndFiabilidad_methods_work() {
        Destino d = new Destino();
        d.setEncuestas(20L);
        d.setTeletrabajo(5L);
        d.setViajar(2L);
        d.setAparamiento(3L);
        d.setGuarderia(1);
        d.setTardes(4L);

        assertEquals("25,00%", d.getTeletrabajoPorcentaje());
        assertEquals("10,00%", d.getViajarPorcentaje());
        assertEquals("15,00%", d.getAparamientoPorcentaje());
        assertEquals("5,00%", d.getGuarderiaPorcentaje());
        assertEquals("20,00%", d.getTardesPorcentaje()); // es inversa
        assertEquals("Media", d.getFiabilidad());
    }
}
