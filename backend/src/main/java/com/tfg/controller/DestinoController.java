package com.tfg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.entity.Destino;
import com.tfg.repository.DestinoRepository;

@RestController
public class DestinoController {

    private final DestinoRepository destinoRepository;

    public DestinoController(DestinoRepository destinoRepository) {
        this.destinoRepository = destinoRepository;
    }

    @GetMapping("/asistente")
    public String getDestinos() {
        ObjectMapper mapper = new ObjectMapper();

        List<Destino> x = destinoRepository.findAll();
        String dtoAsString;
        try {
            dtoAsString = mapper.writeValueAsString(x);
            return dtoAsString;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }

    }

}
