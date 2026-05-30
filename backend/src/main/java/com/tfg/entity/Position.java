package com.tfg.entity;

import java.io.Serializable;

public class Position implements Serializable {
    private Float lat;
    private Float lng;

    public Position() {
    }

    public Float getLat() {
        return lat;
    }

    public void setLat(Float lat) {
        this.lat = lat;
    }

    public Float getLng() {
        return lng;
    }

    public void setLng(Float lng) {
        this.lng = lng;
    }

}
