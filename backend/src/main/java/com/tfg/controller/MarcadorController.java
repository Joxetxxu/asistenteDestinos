package com.tfg.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.entity.Direccion;
import com.tfg.entity.Encuesta;
import com.tfg.entity.Marcador;
import com.tfg.repository.DireccionRepository;
import com.tfg.repository.EncuestaRepository;

@RestController
public class MarcadorController {

    private final DireccionRepository direccionRepository;
    private final EncuestaRepository encuestaRepository;

    public MarcadorController(DireccionRepository direccionRepository, EncuestaRepository encuestaRepository) {
        this.direccionRepository = direccionRepository;
        this.encuestaRepository = encuestaRepository;
    }

    @GetMapping("/marcadores")
    String getMarcadores() {

        ObjectMapper mapper = new ObjectMapper();
        List<Direccion> encuestas = direccionRepository.findAll();

        List<Marcador> marcadores = new ArrayList<>();
        try {

            for (Direccion d : encuestas) {
                Optional<Encuesta> e = encuestaRepository.findById(d.getId());
                if (!e.isEmpty()) {
                    Marcador m = new Marcador(d.getId(), e.get().getOrganismo().getUnidadOrganica(), d.getLat(),
                            d.getLng());
                    marcadores.add(m);
                }

            }

            String json = mapper.writeValueAsString(marcadores);
            return json;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }
    }
}
