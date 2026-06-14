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

import com.tfg.entity.Direccion;
import com.tfg.entity.Encuesta;
import com.tfg.entity.Organismo;
import com.tfg.repository.EncuestaRepository;

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
class DestinoIntegracionTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private EncuestaRepository encuestaRepository;

    private String user = "Basic dXNlcjp1c2Vy";

    @Test
    void getDestino() throws Exception {
        Direccion d = new Direccion();
        d.setId(10L);
        d.setLat("40.123");
        d.setLng("-3.456");

        Organismo o = new Organismo();
        o.setUnidadOrganica("Unidad A");

        Encuesta e = new Encuesta();
        e.setDireccion(d);
        e.setOrganismo(o);

        when(encuestaRepository.findAll()).thenReturn(List.of(e));

        mockMvc.perform(get("/marcadores")
                .header("Authorization", user))
                .andExpect(status().isOk());

    }

}