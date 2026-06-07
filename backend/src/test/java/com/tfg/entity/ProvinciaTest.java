package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ProvinciaTest {

    @Test
    void gettersAndSetters_work() {
        Provincia p = new Provincia();
        p.setCODIGO("001");
        p.setDescripcion("Provincia X");

        assertEquals("001", p.getCODIGO());
        assertEquals("Provincia X", p.getDescripcion());
    }
}
