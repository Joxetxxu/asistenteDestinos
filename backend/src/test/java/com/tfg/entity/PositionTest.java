package com.tfg.entity;

import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PositionTest {

    @Test
    void gettersAndSetters_work() {
        Position p = new Position();
        p.setLat(new BigDecimal("1.23"));
        p.setLng(new BigDecimal("4.56"));

        assertEquals(new BigDecimal("1.23"), p.getLat());
        assertEquals(new BigDecimal("4.56"), p.getLng());
    }
}
