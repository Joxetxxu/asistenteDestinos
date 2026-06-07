package com.tfg.controller;

import com.tfg.entity.Direccion;
import com.tfg.entity.Encuesta;
import com.tfg.entity.Organismo;
import com.tfg.repository.EncuestaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MarcadorControllerTest {

    @Mock
    private EncuestaRepository encuestaRepository;

    private MarcadorController controller;

    @BeforeEach
    void setUp() {
        controller = new MarcadorController(encuestaRepository);
    }

    @Test
    void getMarcadores_returnsJsonWithMarkers() {
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

        String json = controller.getMarcadores();

        assertTrue(json.contains("Unidad A"));
        assertTrue(json.contains("40.123") || json.contains("40.123"));
        assertTrue(json.contains("-3.456") || json.contains("-3.456"));
    }
}
