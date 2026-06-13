package com.tfg.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;
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
import com.tfg.entity.InfoHorario;
import com.tfg.entity.InfoInstalaciones;
import com.tfg.entity.InfoMovilidad;
import com.tfg.entity.InfoPuesto;
import com.tfg.entity.InfoSalario;
import com.tfg.entity.InfoServicios;
import com.tfg.entity.InfoTeletrabajo;
import com.tfg.repository.DireccionRepository;
import com.tfg.repository.EncuestaRepository;
import com.tfg.repository.InfoHorarioRepository;
import com.tfg.repository.InfoInstalacionesRepository;
import com.tfg.repository.InfoMovilidadRepository;
import com.tfg.repository.InfoPuestoRepository;
import com.tfg.repository.InfoSalarioRepository;
import com.tfg.repository.InfoServiciosRepository;
import com.tfg.repository.InfoTeletrabajoRepository;

@RestController
public class EncuestaController {

    private final EncuestaRepository encuestaRepository;
    private final DireccionRepository direccionRepository;
    private final InfoHorarioRepository infoHorarioRepository;
    private final InfoSalarioRepository infoSalarioRepository;
    private final InfoPuestoRepository infoPuestoRepository;
    private final InfoInstalacionesRepository infoInstalacionesRepository;
    private final InfoServiciosRepository infoServiciosRepository;
    private final InfoMovilidadRepository infoMovilidadRepository;
    private final InfoTeletrabajoRepository infoTeletrabajoRepository;

    public EncuestaController(EncuestaRepository encuestaRepository, DireccionRepository direccionRepository,
            InfoHorarioRepository infoHorarioRepository,
            InfoSalarioRepository infoSalarioRepository,
            InfoPuestoRepository infoPuestoRepository,
            InfoInstalacionesRepository infoInstalacionesRepository,
            InfoServiciosRepository infoServiciosRepository, InfoMovilidadRepository infoMovilidadRepository,
            InfoTeletrabajoRepository infoTeletrabajoRepository) {
        this.encuestaRepository = encuestaRepository;
        this.direccionRepository = direccionRepository;
        this.infoHorarioRepository = infoHorarioRepository;
        this.infoSalarioRepository = infoSalarioRepository;
        this.infoPuestoRepository = infoPuestoRepository;
        this.infoInstalacionesRepository = infoInstalacionesRepository;
        this.infoServiciosRepository = infoServiciosRepository;
        this.infoMovilidadRepository = infoMovilidadRepository;
        this.infoTeletrabajoRepository = infoTeletrabajoRepository;
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
    @Transactional
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
    @Transactional
    String registrarEncuesta(@RequestBody Encuesta encuesta) {
        encuesta.setId(null);
        encuesta.getDireccion().setId(null);
        // Lo primero es guardar la dirección y se asignará a la encuesta para que tenga
        // el id
        Direccion x = direccionRepository.save(encuesta.getDireccion());
        encuesta.setDireccion(x);

        InfoHorario newInfoHorario = encuesta.getInfoHorario();
        InfoSalario newInfoSalario = encuesta.getInfoSalario();
        InfoPuesto newInfopuesto = encuesta.getInfoPuesto();
        InfoInstalaciones newInfoInstalaciones = encuesta.getInfoInstalaciones();
        InfoServicios newiInfoServicios = encuesta.getInfoServicios();
        InfoMovilidad newInfoMovilidad = encuesta.getInfoMovilidad();
        InfoTeletrabajo newiInfoTeletrabajo = encuesta.getInfoTeletrabajo();
        encuesta.setInfoHorario(null);
        encuesta.setInfoSalario(null);
        encuesta.setInfoPuesto(null);
        encuesta.setInfoInstalaciones(null);
        encuesta.setInfoServicios(null);
        encuesta.setInfoMovilidad(null);
        encuesta.setInfoTeletrabajo(null);

        Encuesta nueva = encuestaRepository.save(encuesta);
        // Hacemos insert de todas las tablas.
        newInfoHorario.setId(nueva.getId());
        infoHorarioRepository.insertCustom(newInfoHorario);

        newInfoSalario.setId(nueva.getId());
        infoSalarioRepository.insertCustom(newInfoSalario);

        newInfoInstalaciones.setId(nueva.getId());
        infoInstalacionesRepository.insertCustom(newInfoInstalaciones);

        newInfopuesto.setId(nueva.getId());
        infoPuestoRepository.insertCustom(newInfopuesto);

        newInfoMovilidad.setId(nueva.getId());
        infoMovilidadRepository.insertCustom(newInfoMovilidad);
        newiInfoTeletrabajo.setId(nueva.getId());
        infoTeletrabajoRepository.insertCustom(newiInfoTeletrabajo);

        newiInfoServicios.setId(nueva.getId());
        newiInfoServicios.getDireccion().setId(null);
        if (newiInfoServicios.getHayGuarderia().equals("S")) {
            // GUARDAR. No hay coordenadas en guardería
            newiInfoServicios.getDireccion().setLat("0");
            newiInfoServicios.getDireccion().setLng("0");
            Direccion dirServicio = direccionRepository.save(newiInfoServicios.getDireccion());
            newiInfoServicios.setDireccion(dirServicio);
        }
        infoServiciosRepository.insertCustom(newiInfoServicios);

        return "OK";
    }

}
