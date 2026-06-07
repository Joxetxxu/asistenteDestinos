package com.tfg.controller;

import com.tfg.entity.Organismo;
import com.tfg.repository.MunicipioRepository;
import com.tfg.repository.OrganismoRepository;
import com.tfg.repository.ProvinciaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class TablasMaestrasControllerUnitTest {

    @Mock
    private OrganismoRepository organismoRepository;
    @Mock
    private ProvinciaRepository provinciaRepository;
    @Mock
    private MunicipioRepository municipioRepository;

    private TablasMaestrasController controller;

    @BeforeEach
    void setUp() {
        controller = new TablasMaestrasController(organismoRepository, provinciaRepository, municipioRepository);
    }

    @Test
    void getOrganismosJerarquia_callsRepository() {
        Organismo o = new Organismo();
        o.setDir3("O1");
        o.setNivel(5);

        when(organismoRepository.findByNivel(5)).thenReturn(List.of(o));

        List<Organismo> result = controller.getOrganismosJerarquia();

        assertEquals(1, result.size());
        verify(organismoRepository).findByNivel(5);
    }
}
