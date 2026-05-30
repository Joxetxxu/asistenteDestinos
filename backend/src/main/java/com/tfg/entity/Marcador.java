package com.tfg.entity;

import java.io.Serializable;

public class Marcador implements Serializable {

    private Long id;
    private String name;
    private Position position = new Position();

    public Marcador() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

}
