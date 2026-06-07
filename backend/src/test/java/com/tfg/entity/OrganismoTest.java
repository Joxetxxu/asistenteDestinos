package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class OrganismoTest {

    @Test
    void gettersAndSetters_work() {
        Organismo o = new Organismo();
        o.setDir3("O1");
        o.setUnidadOrganica("Unidad");
        o.setNivel(3);

        assertEquals("O1", o.getDir3());
        assertEquals("Unidad", o.getUnidadOrganica());
        assertEquals(3, o.getNivel());
    }
}
