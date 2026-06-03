package com.tfg.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import com.tfg.entity.Municipio;
import com.tfg.entity.Organismo;
import com.tfg.entity.Provincia;
import com.tfg.repository.MunicipioRepository;
import com.tfg.repository.OrganismoRepository;
import com.tfg.repository.ProvinciaRepository;

@SpringBootTest
@AutoConfigureMockMvc
class TablasMaestrasControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrganismoRepository organismoRepository;
    @MockBean
    private ProvinciaRepository provinciaRepository;
    @MockBean
    private MunicipioRepository municipioRepository;

    @Test
    void getProvincias_endpoint_returnsJson() throws Exception {
        Provincia p = new Provincia();
        p.setCODIGO("001");
        p.setDescripcion("Provincia X");

        when(provinciaRepository.findAll()).thenReturn(List.of(p));

        mockMvc.perform(get("/provincias"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].CODIGO").value("001"))
                .andExpect(jsonPath("$[0].descripcion").value("Provincia X"));
    }

    @Test
    void getMunicipios_endpoint_returnsJson() throws Exception {
        Municipio m = new Municipio();
        m.setCODIGO("M01");
        m.setDescripcion("Mun A");

        when(municipioRepository.findAll()).thenReturn(List.of(m));

        mockMvc.perform(get("/municipios"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].CODIGO").value("M01"))
                .andExpect(jsonPath("$[0].descripcion").value("Mun A"));
    }

    @Test
    void getMunicipiosByProvincia_endpoint_returnsJson() throws Exception {
        Provincia p = new Provincia();
        p.setCODIGO("001");
        p.setDescripcion("Provincia X");

        Municipio m = new Municipio();
        m.setCODIGO("M01");
        m.setDescripcion("Mun A");
        m.setProvincia(p);

        when(municipioRepository.findByProvincia("001")).thenReturn(List.of(m));

        mockMvc.perform(get("/municipios/001"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].CODIGO").value("M01"))
                .andExpect(jsonPath("$[0].provincia.CODIGO").value("001"));
    }

    @Test
    void getOrganismos_endpoint_returnsJson() throws Exception {
        Organismo o = new Organismo();
        o.setDir3("O1");
        o.setUnidadOrganica("Unidad");
        o.setNivel(5);

        when(organismoRepository.findAll()).thenReturn(List.of(o));

        mockMvc.perform(get("/organismos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].dir3").value("O1"))
                .andExpect(jsonPath("$[0].unidadOrganica").value("Unidad"));
    }

    @Test
    void getOrganismosJerarquia_endpoint_returnsJson() throws Exception {
        Organismo o = new Organismo();
        o.setDir3("O1");
        o.setUnidadOrganica("Unidad");
        o.setNivel(5);

        when(organismoRepository.findByNivel(5)).thenReturn(List.of(o));

        mockMvc.perform(get("/jerarquia"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nivel").value(5));
    }
}
