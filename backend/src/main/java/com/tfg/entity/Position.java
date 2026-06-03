package com.tfg.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import lombok.Data;

@Data
public class Position implements Serializable {
    private BigDecimal lat;
    private BigDecimal lng;

    public Position() {
    }

}
