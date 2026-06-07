package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoInstalacionesTest {

    @Test
    void gettersAndSetters_work() {
        InfoInstalaciones ii = new InfoInstalaciones();
        ii.setId(8L);
        ii.setGimnasio("Sí");

        assertEquals(8L, ii.getId());
        assertEquals("Sí", ii.getGimnasio());
    }
}
