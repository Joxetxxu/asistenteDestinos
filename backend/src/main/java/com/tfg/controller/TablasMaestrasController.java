package com.tfg.controller;

import com.tfg.entity.Municipio;
import com.tfg.entity.Organismo;
import com.tfg.entity.Provincia;
import com.tfg.repository.MunicipioRepository;
import com.tfg.repository.OrganismoRepository;
import com.tfg.repository.ProvinciaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class TablasMaestrasController {

    private final OrganismoRepository organismoRepository;
    private final ProvinciaRepository provinciaRepository;
    private final MunicipioRepository municipioRepository;

    TablasMaestrasController(OrganismoRepository organismoRepository,
            ProvinciaRepository provinciaRepository,
            MunicipioRepository municipioRepository) {
        this.organismoRepository = organismoRepository;
        this.provinciaRepository = provinciaRepository;
        this.municipioRepository = municipioRepository;
    }

    @GetMapping("/organismos")
    List<Organismo> getOrganismos() {
        List<Organismo> organismos = organismoRepository.findAll();
        return organismos;
    }

    @GetMapping("/jerarquia")
    List<Organismo> getOrganismosJerarquia() {
        return organismoRepository.findByNivel(5);
    }

    @GetMapping("/provincias")
    List<Provincia> getProvincias() {
        return provinciaRepository.findAll();
    }

    @GetMapping("/municipios")
    List<Municipio> getMunicipios() {
        return municipioRepository.findAll();
    }

    @GetMapping("/municipios/{id}")
    List<Municipio> getMunicipios(@PathVariable String id) {
        return municipioRepository.findByProvincia(id);
    }
}
