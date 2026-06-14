package com.tfg.integracion;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.tfg.entity.Destino;
import com.tfg.repository.DestinoRepository;

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
class MarcadorIntegracionTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private DestinoRepository destinoRepository;

    private String user = "Basic dXNlcjp1c2Vy";

    @Test
    void getDestino() throws Exception {
        Destino low = new Destino();
        low.setDir3("L");
        low.setSueldoTotal(0.0f);
        low.setEncuestas(0L);
        low.setTeletrabajo(90L);
        low.setGuarderia(1);

        List<Destino> all = new ArrayList<>();
        all.add(low);

        when(destinoRepository.findAll()).thenReturn(all);

        mockMvc.perform(get("/asistente/sueldoTotal/teletrabajo/viajar")
                .header("Authorization", user))
                .andExpect(status().isOk());

    }

}