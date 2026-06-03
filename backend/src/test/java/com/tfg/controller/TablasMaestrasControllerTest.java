package com.tfg.controller;

import com.tfg.entity.Municipio;
import com.tfg.entity.Organismo;
import com.tfg.entity.Provincia;
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
class TablasMaestrasControllerTest {

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
    void getProvincias_returnsAllProvincias() {
        Provincia p = new Provincia();
        p.setCODIGO("001");
        p.setDescripcion("Provincia X");

        List<Provincia> expected = List.of(p);
        when(provinciaRepository.findAll()).thenReturn(expected);

        List<Provincia> actual = controller.getProvincias();

        assertEquals(expected, actual);
        verify(provinciaRepository).findAll();
    }

    @Test
    void getMunicipios_returnsAllMunicipios() {
        Municipio m = new Municipio();
        m.setCODIGO("M01");
        m.setDescripcion("Mun A");

        List<Municipio> expected = List.of(m);
        when(municipioRepository.findAll()).thenReturn(expected);

        List<Municipio> actual = controller.getMunicipios();

        assertEquals(expected, actual);
        verify(municipioRepository).findAll();
    }

    @Test
    void getMunicipios_byProvincia_returnsFiltered() {
        Provincia p = new Provincia();
        p.setCODIGO("001");
        p.setDescripcion("Provincia X");

        Municipio m = new Municipio();
        m.setCODIGO("M01");
        m.setDescripcion("Mun A");
        m.setProvincia(p);

        List<Municipio> expected = List.of(m);
        when(municipioRepository.findByProvincia("001")).thenReturn(expected);

        List<Municipio> actual = controller.getMunicipios("001");

        assertEquals(expected, actual);
        verify(municipioRepository).findByProvincia("001");
    }

    @Test
    void getOrganismos_returnsAllOrganismos() {
        Organismo o = new Organismo();
        o.setDir3("O1");
        o.setUnidadOrganica("Unidad");
        o.setNivel(5);

        List<Organismo> expected = List.of(o);
        when(organismoRepository.findAll()).thenReturn(expected);

        List<Organismo> actual = controller.getOrganismos();

        assertEquals(expected, actual);
        verify(organismoRepository).findAll();
    }
}
