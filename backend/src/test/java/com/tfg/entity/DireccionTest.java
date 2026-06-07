package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DireccionTest {

    @Test
    void gettersAndSetters_work() {
        Direccion d = new Direccion();
        d.setId(5L);
        d.setCalle("Calle Falsa");
        d.setLat("40.0");
        d.setLng("-3.0");
        d.setCalle("calle");
        d.setCodigoPostal("28922");

        assertEquals(5L, d.getId());
        assertEquals("Calle Falsa", d.getCalle());
        assertEquals("40.0", d.getLat());
        assertEquals("-3.0", d.getLng());
        assertEquals("28922", d.getCodigoPostal());
        assertEquals("calle", d.getCalle());
    }
}
