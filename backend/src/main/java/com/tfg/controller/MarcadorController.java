package com.tfg.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.entity.Encuesta;
import com.tfg.entity.Marcador;
import com.tfg.repository.EncuestaRepository;

@RestController
public class MarcadorController {
    private final EncuestaRepository encuestaRepository;

    public MarcadorController( EncuestaRepository encuestaRepository) {
        this.encuestaRepository = encuestaRepository;
    }

    @GetMapping("/marcadores")
    String getMarcadores() {

        ObjectMapper mapper = new ObjectMapper();
        List<Encuesta> encuestas = encuestaRepository.findAll();

        List<Marcador> marcadores = new ArrayList<>();
        try {

            for (Encuesta e : encuestas) {

                Marcador m = new Marcador(e.getDireccion().getId(), e.getOrganismo().getUnidadOrganica(),e.getDireccion().getLat(), e.getDireccion().getLng());
                marcadores.add(m);
            }
            
            marcadores = marcadores.stream().distinct().collect(Collectors.toList());

            String json = mapper.writeValueAsString(marcadores);
            return json;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }
    }
}
