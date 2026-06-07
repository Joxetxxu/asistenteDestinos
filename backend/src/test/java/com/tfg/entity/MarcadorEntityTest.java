package com.tfg.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;

class MarcadorEntityTest {

    @Test
    void constructor_and_equality_work() {
        Marcador m1 = new Marcador(1L, "Name", "40.0", "-3.0");
        Marcador m2 = new Marcador(1L, "Name", "40.0", "-3.0");

        assertEquals(m1, m2);
        assertEquals(m1.hashCode(), m2.hashCode());

        assertEquals(1L, m1.getId());
        assertEquals("Name", m1.getName());
        assertNotNull(m1.getPosition());
        assertEquals(new BigDecimal("40.0"), m1.getPosition().getLat());
        assertEquals(new BigDecimal("-3.0"), m1.getPosition().getLng());

        boolean igual = m1.equals(m2);
        assertTrue(igual);

    }
}
