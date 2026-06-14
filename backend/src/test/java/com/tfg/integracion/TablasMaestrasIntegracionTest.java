package com.tfg.integracion;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.tfg.entity.Municipio;
import com.tfg.entity.Organismo;
import com.tfg.entity.Provincia;
import com.tfg.repository.MunicipioRepository;
import com.tfg.repository.OrganismoRepository;
import com.tfg.repository.ProvinciaRepository;

/**
 * Con esto se carga la configuración de seguridad
 * 
 * otras opciones
 * 
 * @WebMvcTest(controllers = EncuestaController.class)
 * @Import(SecurityConfig.class)
 * 
 * 
 *                               ignorar seguridad:
 * @AutoConfigureMockMvc(addFilters = false)
 * @WebMvcTest(EncuestaController.class)
 */
@SpringBootTest
@AutoConfigureMockMvc
class TablasMaestrasIntegracionTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrganismoRepository organismoRepository;
    @MockitoBean
    private ProvinciaRepository provinciaRepository;
    @MockitoBean
    private MunicipioRepository municipioRepository;

    private String user = "Basic dXNlcjp1c2Vy";

    @Test
    void getOrganismos() throws Exception {
        Organismo o = new Organismo();
        o.setDir3("O1");
        o.setNivel(5);
        when(organismoRepository.findAll()).thenReturn(List.of(o));

        mockMvc.perform(get("/organismos")
                .header("Authorization", user))
                .andExpect(status().isOk());

    }

    @Test
    void getProvincias() throws Exception {
        Provincia o = new Provincia();
        o.setCODIGO("uno");
        o.setDescripcion("asdf");
        when(provinciaRepository.findAll()).thenReturn(List.of(o));

        mockMvc.perform(get("/provincias")
                .header("Authorization", user))
                .andExpect(status().isOk());
    }

    @Test
    void getMunicipio() throws Exception {
        Municipio o = new Municipio();
        o.setCODIGO("uno");
        o.setDescripcion("asdf");
        when(municipioRepository.findAll()).thenReturn(List.of(o));

        mockMvc.perform(get("/municipios")
                .header("Authorization", user))
                .andExpect(status().isOk());
    }

}