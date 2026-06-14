
package com.tfg.controller;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.tfg.entity.Encuesta;
import com.tfg.repository.DireccionRepository;
import com.tfg.repository.EncuestaRepository;
import com.tfg.repository.InfoHorarioRepository;
import com.tfg.repository.InfoInstalacionesRepository;
import com.tfg.repository.InfoMovilidadRepository;
import com.tfg.repository.InfoPuestoRepository;
import com.tfg.repository.InfoSalarioRepository;
import com.tfg.repository.InfoServiciosRepository;
import com.tfg.repository.InfoTeletrabajoRepository;;

@ExtendWith(MockitoExtension.class)
class EncuestaControllerTest {

    private EncuestaController controller;

    @Mock
    private EncuestaRepository encuestaRepository;
    @Mock
    private DireccionRepository direccionRepository;
    @Mock
    private InfoHorarioRepository infoHorarioRepository;
    @Mock
    private InfoSalarioRepository infoSalarioRepository;
    @Mock
    private InfoPuestoRepository infoPuestoRepository;
    @Mock
    private InfoInstalacionesRepository infoInstalacionesRepository;
    @Mock
    private InfoServiciosRepository infoServiciosRepository;
    @Mock
    private InfoMovilidadRepository infoMovilidadRepository;
    @Mock
    private InfoTeletrabajoRepository infoTeletrabajoRepository;

    @BeforeEach
    void setUp() {
        controller = new EncuestaController(encuestaRepository, direccionRepository, infoHorarioRepository,
                infoSalarioRepository, infoPuestoRepository, infoInstalacionesRepository, infoServiciosRepository,
                infoMovilidadRepository,
                infoTeletrabajoRepository);
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


    
}
