package com.tfg.integracion;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.dto.EstadoDto;
import com.tfg.entity.Encuesta;
import com.tfg.repository.DireccionRepository;
import com.tfg.repository.EncuestaRepository;
import com.tfg.repository.InfoHorarioRepository;
import com.tfg.repository.InfoInstalacionesRepository;
import com.tfg.repository.InfoMovilidadRepository;
import com.tfg.repository.InfoPuestoRepository;
import com.tfg.repository.InfoSalarioRepository;
import com.tfg.repository.InfoServiciosRepository;
import com.tfg.repository.InfoTeletrabajoRepository;

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
class EncuestaIntegracionTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private EncuestaRepository encuestaRepository;
    @MockitoBean
    private DireccionRepository direccionRepository;
    @MockitoBean
    private InfoHorarioRepository infoHorarioRepository;
    @MockitoBean
    private InfoSalarioRepository infoSalarioRepository;
    @MockitoBean
    private InfoPuestoRepository infoPuestoRepository;
    @MockitoBean
    private InfoInstalacionesRepository infoInstalacionesRepository;
    @MockitoBean
    private InfoServiciosRepository infoServiciosRepository;
    @MockitoBean
    private InfoMovilidadRepository infoMovilidadRepository;
    @MockitoBean
    private InfoTeletrabajoRepository infoTeletrabajoRepository;

    private ObjectMapper mapper = new ObjectMapper();

    private String admin = "Basic YWRtaW46YWRtaW4=";
    private String user = "Basic dXNlcjp1c2Vy";

    @Test
    void test() throws Exception {
        Long id = 1L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(1L);

        when(encuestaRepository.findById(id)).thenReturn(Optional.of(encuesta));

        EstadoDto dto = new EstadoDto();
        dto.setEstado(2L);
        mockMvc.perform(put("/encuestas/" + id + "/estado").header("Authorization", admin)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(dto)))
                .andExpect(status().isOk());
        verify(encuestaRepository).findById(id);
        verify(encuestaRepository).save(any(Encuesta.class));
    }

    @Test
    void actualizarEstado_notFound() throws Exception {
        Long id = 5L;
        when(encuestaRepository.findById(id)).thenReturn(Optional.empty());

        EstadoDto dto = new EstadoDto();
        dto.setEstado(2L);

        mockMvc.perform(put("/encuestas/" + id + "/estado").header("Authorization", admin)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(dto)))
                .andExpect(status().isNotFound());
    }

    @Test
    void actualizarEstado_invalidCurrentState() throws Exception {
        Long id = 2L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(3L); // not 1

        when(encuestaRepository.findById(id)).thenReturn(Optional.of(encuesta));

        EstadoDto dto = new EstadoDto();
        dto.setEstado(4L);

        mockMvc.perform(put("/encuestas/" + id + "/estado").header("Authorization", admin)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void actualizarEstado_notAllow() throws Exception {
        Long id = 2L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(3L); // not 1

        when(encuestaRepository.findById(id)).thenReturn(Optional.of(encuesta));

        EstadoDto dto = new EstadoDto();
        dto.setEstado(4L);

        // mockMvc.perform(put("/encuestas/" + id + "/estado").header("Authorization",
        // user)
        // .contentType(MediaType.APPLICATION_JSON)
        // .content(mapper.writeValueAsString(dto)))
        // .andExpect(status().isBadRequest());
        mockMvc.perform(put("/encuestas/" + id + "/estado").header("Authorization", user)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(dto))).andDo(print())
                .andExpect(status().isForbidden());

    }

}