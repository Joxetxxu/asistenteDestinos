package com.tfg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.entity.Encuesta;
import com.tfg.repository.EncuestaRepository;

@RestController
public class EncuestaController {

    private final EncuestaRepository encuestaRepository;

    public EncuestaController(EncuestaRepository encuestaRepository) {
        this.encuestaRepository = encuestaRepository;
    }

    @GetMapping("/encuestas")
    String getOrganismos() {

        ObjectMapper mapper = new ObjectMapper();
        List<Encuesta> encuestas = encuestaRepository.findAll();
        try {
            String dtoAsString = mapper.writeValueAsString(encuestas);

            return dtoAsString;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }
    }

}
