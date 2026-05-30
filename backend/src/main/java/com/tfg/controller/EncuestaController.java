package com.tfg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.entity.Encuesta;
import com.tfg.repository.EncuestaRepository;

@RestController
public class EncuestaController {

    private final EncuestaRepository encuestaRepository;

    public EncuestaController(EncuestaRepository encuestaRepository) {
        this.encuestaRepository = encuestaRepository;
    }

    @GetMapping("/encuestas")
    List<Encuesta> getOrganismos() {
        return encuestaRepository.findAll();
    }

}
