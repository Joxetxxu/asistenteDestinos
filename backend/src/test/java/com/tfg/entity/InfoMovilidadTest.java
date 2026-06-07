package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoMovilidadTest {

    @Test
    void gettersAndSetters_work() {
        InfoMovilidad im = new InfoMovilidad();
        im.setId(14L);
        im.setMovilidadInterna("Sí");

        assertEquals(14L, im.getId());
        assertEquals("Sí", im.getMovilidadInterna());
    }
}
