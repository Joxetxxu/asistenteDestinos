package com.tfg.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.dto.EstadoDto;
import com.tfg.entity.Direccion;
import com.tfg.entity.Encuesta;
import com.tfg.repository.DireccionRepository;
import com.tfg.repository.EncuestaRepository;

@RestController
public class EncuestaController {

    private final EncuestaRepository encuestaRepository;
    private final DireccionRepository direccionRepository;

    public EncuestaController(EncuestaRepository encuestaRepository, DireccionRepository direccionRepository) {
        this.encuestaRepository = encuestaRepository;
        this.direccionRepository = direccionRepository;
    }

    @GetMapping("/encuestas")
    String getEncuestas() {

        ObjectMapper mapper = new ObjectMapper();
        List<Encuesta> encuestas = encuestaRepository.findAll();
        // ordenar por estado
        encuestas.sort((e1, e2) -> e1.getEstado().compareTo(e2.getEstado()));
        try {
            String dtoAsString = mapper.writeValueAsString(encuestas);
            return dtoAsString;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }
    }

    @GetMapping("/encuestas/{id}")
    String getEncuesta(@PathVariable Long id) {

        ObjectMapper mapper = new ObjectMapper();
        Optional<Encuesta> encuesta = encuestaRepository.findById(id);
        try {
            String dtoAsString = mapper.writeValueAsString(encuesta.get());
            return dtoAsString;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }
    }

    @GetMapping("/encuestas/organismo/{dir3}")
    String getEncuestasOrganismo(@PathVariable String dir3) {

        ObjectMapper mapper = new ObjectMapper();
        List<Encuesta> encuestas = encuestaRepository.findByOrganismoId(dir3);
        try {
            String dtoAsString = mapper.writeValueAsString(encuestas);
            return dtoAsString;
        } catch (JsonProcessingException e) {
            return e.getMessage();
        }
    }

    @PutMapping("/encuestas/{id}/estado")
    String actualizarEstado(@PathVariable Long id, @RequestBody EstadoDto estadoDto) {
        Optional<Encuesta> encuestaOptional = encuestaRepository.findById(id);
        if (encuestaOptional.isEmpty()) {
            return "Encuesta no encontrada";
        } else if (encuestaOptional.get().getEstado() != 1) {
            return "Estado no válido";
        }

        Encuesta encuesta = encuestaOptional.get();
        encuesta.setEstado(estadoDto.getEstado());
        encuestaRepository.save(encuesta);
        return "OK";
    }

    @PostMapping("/encuestas/registrar")
    String registrarEncuesta( @RequestBody Encuesta encuesta) {
        encuesta.setId(null);
        encuesta.getDireccion().setId(null);
        // Lo primero es guardar la dirección y se asignará a la encuesta para que tenga el id
        Direccion x = direccionRepository.save(encuesta.getDireccion());
        encuesta.setDireccion(x);

        encuesta.setInfoHorario(null);
        encuesta.setInfoSalario(null);
        encuesta.setInfoPuesto(null);
        encuesta.setInfoInstalaciones(null);
        encuesta.setInfoServicios(null);
        encuesta.setInfoMovilidad(null);
        encuesta.setInfoTeletrabajo(null);

        encuestaRepository.save(encuesta);

        return "OK";
    }

}
