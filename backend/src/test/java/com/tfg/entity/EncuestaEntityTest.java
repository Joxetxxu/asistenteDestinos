package com.tfg.entity;

import org.junit.jupiter.api.Test;

import java.sql.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EncuestaEntityTest {

    @Test
    void settersAndRelationships_work() {
        Encuesta e = new Encuesta();
        e.setId(10L);
        e.setNombre("E1");
        e.setFechaRealizacion(new Date(0));

        Direccion d = new Direccion();
        d.setId(2L);
        e.setDireccion(d);

        Organismo o = new Organismo();
        o.setDir3("ORG");
        e.setOrganismo(o);

        assertEquals(10L, e.getId());
        assertEquals("E1", e.getNombre());
        assertEquals(2L, e.getDireccion().getId());
        assertEquals("ORG", e.getOrganismo().getDir3());
    }
}
