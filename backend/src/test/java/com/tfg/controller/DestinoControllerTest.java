package com.tfg.controller;

import com.tfg.entity.Destino;
import com.tfg.repository.DestinoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class DestinoControllerTest {

    @Mock
    private DestinoRepository destinoRepository;

    private DestinoController controller;

    @BeforeEach
    void setUp() {
        controller = new DestinoController(destinoRepository);
    }

    @Test
    void calcularMaMinSalario_and_normalize_sueldoTotal() {
        Destino d1 = new Destino();
        d1.setSueldoTotal(1000.0f);
        Destino d2 = new Destino();
        d2.setSueldoTotal(2000.0f);

        List<Destino> list = List.of(d1, d2);
        controller.calcularMaMinSalario(list);

        float normalized = controller.getValorColumna(d2, "sueldoTotal");

        assertEquals(100.0f, normalized, 0.001f);
    }

    @Test
    void getValorColumna_fiabilidad_thresholds() {
        Destino dLow = new Destino();
        dLow.setEncuestas(5L);
        assertEquals(0.0f, controller.getValorColumna(dLow, "fiabilidad"));

        Destino dMed = new Destino();
        dMed.setEncuestas(15L);
        assertEquals(50.0f, controller.getValorColumna(dMed, "fiabilidad"));

        Destino dHigh = new Destino();
        dHigh.setEncuestas(30L);
        assertEquals(100.0f, controller.getValorColumna(dHigh, "fiabilidad"));
    }

    @Test
    void getDestinos_sortsAndAssignsOrder() {
        Destino low = new Destino();
        low.setDir3("L");
        low.setSueldoTotal(1000.0f);
        low.setEncuestas(10L);
        low.setTeletrabajo(90L);
        low.setGuarderia(1);

        Destino high = new Destino();
        high.setDir3("H");
        high.setSueldoTotal(3000.0f);
        high.setEncuestas(10L);
        high.setTeletrabajo(90L);
        high.setGuarderia(1);
        List<Destino> all = new ArrayList<>();
        all.add(low);
        all.add(high);

        when(destinoRepository.findAll()).thenReturn(all);

        List<Destino> result = controller.getDestinos("sueldoTotal", "teletrabajo", "guarderia");

        assertFalse(result.isEmpty());
        // expect 'high' first due to higher sueldoTotal
        assertEquals("H", result.get(0).getDir3());
        assertEquals(1, result.get(0).getOrden());
        assertEquals(2, result.get(1).getOrden());
    }

    @Test
    void getDestinos_SinEncuestas() {
        Destino low = new Destino();
        low.setDir3("L");
        low.setSueldoTotal(0.0f);
        low.setEncuestas(0L);
        low.setTeletrabajo(90L);
        low.setGuarderia(1);

        List<Destino> all = new ArrayList<>();
        all.add(low);

        when(destinoRepository.findAll()).thenReturn(all);

        List<Destino> result = controller.getDestinos("sueldoTotal", "teletrabajo", "guarderia");
        assertEquals("L", result.get(0).getDir3());
        assertEquals(1, result.get(0).getOrden());
        //assertEquals(1, result.get(0).getMediaPonderada());
    }

}
