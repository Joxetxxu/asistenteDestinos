package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoHorarioTest {

    @Test
    void gettersAndSetters_work() {
        InfoHorario ih = new InfoHorario();
        ih.setId(7L);
        ih.setHorario("09:00-17:00");

        assertEquals(7L, ih.getId());
        assertEquals("09:00-17:00", ih.getHorario());
    }
}
