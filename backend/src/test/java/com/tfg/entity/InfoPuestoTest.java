package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoPuestoTest {

    @Test
    void gettersAndSetters_work() {
        InfoPuesto ip = new InfoPuesto();
        ip.setId(13L);
        ip.setNivel("Senior");

        assertEquals(13L, ip.getId());
        assertEquals("Senior", ip.getNivel());
    }
}
