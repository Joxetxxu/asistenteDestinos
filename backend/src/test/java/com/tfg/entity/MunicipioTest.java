package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MunicipioTest {

    @Test
    void gettersAndSetters_work() {
        Municipio m = new Municipio();
        m.setCODIGO("M01");
        m.setDescripcion("Mun A");

        Provincia p = new Provincia();
        p.setCODIGO("001");
        m.setProvincia(p);

        assertEquals("M01", m.getCODIGO());
        assertEquals("Mun A", m.getDescripcion());
        assertEquals("001", m.getProvincia().getCODIGO());
    }
}
