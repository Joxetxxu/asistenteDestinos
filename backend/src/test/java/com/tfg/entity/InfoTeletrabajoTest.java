package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoTeletrabajoTest {

    @Test
    void gettersAndSetters_work() {
        InfoTeletrabajo it = new InfoTeletrabajo();
        it.setId(9L);
        it.setHayTeletrabajo("Sí");

        assertEquals(9L, it.getId());
        assertEquals("Sí", it.getHayTeletrabajo());
    }
}
