package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InfoSalarioTest {

    @Test
    void gettersAndSetters_work() {
        InfoSalario is = new InfoSalario();
        is.setId(12L);
        is.setSalario(1234.5f);

        assertEquals(12L, is.getId());
        assertEquals(1234.5f, is.getSalario());
    }
}
