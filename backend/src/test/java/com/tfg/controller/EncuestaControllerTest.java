
package com.tfg.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tfg.dto.EstadoDto;
import com.tfg.entity.Encuesta;
import com.tfg.repository.DireccionRepository;
import com.tfg.repository.EncuestaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class EncuestaControllerTest {

    @Mock
    private EncuestaRepository encuestaRepository;

    private EncuestaController controller;

    @Mock
    private DireccionRepository direccionRepository;

    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
       // controller = new EncuestaController(encuestaRepository,direccionRepository);
    }

    @Test
    void getEncuestas_returnsJsonList() {
        Encuesta e = new Encuesta();
        e.setId(1L);
        e.setNombre("Encuesta 1");
        e.setFechaRealizacion(new Date(System.currentTimeMillis()));

        when(encuestaRepository.findAll()).thenReturn(List.of(e));

        String json = controller.getEncuestas();

        assertTrue(json.contains("Encuesta 1"));
        assertTrue(json.contains("1"));
    }

    @Test
    void getEncuesta_returnsJsonObject() {
        Encuesta e = new Encuesta();
        e.setId(2L);
        e.setNombre("Encuesta 2");

        when(encuestaRepository.findById(2L)).thenReturn(Optional.of(e));

        String json = controller.getEncuesta(2L);

        assertTrue(json.contains("Encuesta 2"));
        assertTrue(json.contains("2"));
    }

    @Test
    void getEncuestasOrganismo_returnsJsonList() {
        Encuesta e = new Encuesta();
        e.setId(3L);
        e.setNombre("Encuesta 3");

        when(encuestaRepository.findByOrganismoId("O1")).thenReturn(List.of(e));

        String json = controller.getEncuestasOrganismo("O1");

        assertTrue(json.contains("Encuesta 3"));
        assertTrue(json.contains("3"));
    }

    @Test
    void actualizarEstado_success() throws Exception {
        Long id = 1L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(1L);

        when(encuestaRepository.findById(id)).thenReturn(Optional.of(encuesta));

        EstadoDto dto = new EstadoDto();
        dto.setEstado(2L);

        // mockMvc.perform(put("/encuestas/" + id + "/estado")
        //         .contentType(MediaType.APPLICATION_JSON)
        //         .content(mapper.writeValueAsString(dto)))
        //         .andExpect(status().isOk())
        //         .andExpect(content().string("OK"));

        verify(encuestaRepository).save(any(Encuesta.class));
    }

    @Test
    void actualizarEstado_notFound() throws Exception {
        Long id = 5L;
        when(encuestaRepository.findById(id)).thenReturn(Optional.empty());

        EstadoDto dto = new EstadoDto();
        dto.setEstado(2L);

        // mockMvc.perform(put("/encuestas/" + id + "/estado")
        //         .contentType(MediaType.APPLICATION_JSON)
        //         .content(mapper.writeValueAsString(dto)))
        //         .andExpect(status().isOk())
        //         .andExpect(content().string("Encuesta no encontrada"));
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

        // mockMvc.perform(put("/encuestas/" + id + "/estado")
        //         .contentType(MediaType.APPLICATION_JSON)
        //         .content(mapper.writeValueAsString(dto)))
        //         .andExpect(status().isOk())
        //         .andExpect(content().string("Estado no válido"));
    }
}
