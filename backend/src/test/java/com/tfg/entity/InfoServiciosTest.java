package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoServiciosTest {

    @Test
    void gettersAndSetters_work() {
        InfoServicios is = new InfoServicios();
        is.setId(11L);
        is.setHayGuarderia("Sí");

        assertEquals(11L, is.getId());
        assertEquals("Sí", is.getHayGuarderia());
    }
}
