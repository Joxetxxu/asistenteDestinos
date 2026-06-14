package com.tfg.integracion;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.List;
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
import com.tfg.entity.Direccion;
import com.tfg.entity.Encuesta;
import com.tfg.entity.InfoHorario;
import com.tfg.entity.InfoInstalaciones;
import com.tfg.entity.InfoMovilidad;
import com.tfg.entity.InfoPuesto;
import com.tfg.entity.InfoSalario;
import com.tfg.entity.InfoServicios;
import com.tfg.entity.InfoTeletrabajo;
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
    void actualizarEstado_ok() throws Exception {
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

        mockMvc.perform(put("/encuestas/" + id + "/estado").header("Authorization", user)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(dto))).andDo(print())
                .andExpect(status().isForbidden());

    }

    @Test
    void registrarEncuesta_success() throws Exception {
        // Preparar datos de prueba
        Encuesta encuesta = getEncuesta();

        // Mock de los repositorios
        Direccion savedDireccion = new Direccion();
        savedDireccion.setId(1L);
        savedDireccion.setCalle("Calle Principal");
        savedDireccion.setNumero("123");
        savedDireccion.setCodigoPostal("28001");
        savedDireccion.setLat("40.4168");
        savedDireccion.setLng("-3.7038");

        Encuesta savedEncuesta = new Encuesta();
        savedEncuesta.setId(1L);
        savedEncuesta.setNombre("Encuesta Test");
        savedEncuesta.setEstado(1L);
        savedEncuesta.setDireccion(savedDireccion);

        when(direccionRepository.save(any(Direccion.class))).thenReturn(savedDireccion);
        when(encuestaRepository.save(any(Encuesta.class))).thenReturn(savedEncuesta);

        // Realizar la petición
        mockMvc.perform(post("/encuestas/registrar").header("Authorization", user)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(encuesta)))
                .andDo(print())
                .andExpect(status().isOk());

        // Verificar que los repositorios fueron llamados
        verify(direccionRepository).save(any(Direccion.class));
        verify(encuestaRepository).save(any(Encuesta.class));
        verify(infoHorarioRepository).insertCustom(any(InfoHorario.class));
        verify(infoSalarioRepository).insertCustom(any(InfoSalario.class));
        verify(infoPuestoRepository).insertCustom(any(InfoPuesto.class));
        verify(infoInstalacionesRepository).insertCustom(any(InfoInstalaciones.class));
        verify(infoMovilidadRepository).insertCustom(any(InfoMovilidad.class));
        verify(infoTeletrabajoRepository).insertCustom(any(InfoTeletrabajo.class));
        verify(infoServiciosRepository).insertCustom(any(InfoServicios.class));
    }

    private Encuesta getEncuesta() {
        Direccion direccion = new Direccion();
        direccion.setCalle("Calle Principal");
        direccion.setNumero("123");
        direccion.setCodigoPostal("28001");
        direccion.setLat("40.4168");
        direccion.setLng("-3.7038");

        InfoHorario infoHorario = new InfoHorario();
        infoHorario.setHorario("9-12");
        infoHorario.setHayHorarioVerano("S");
        infoHorario.setHorarioVeranoCondiciones("S");
        infoHorario.setTardesObligatorias("S");

        InfoSalario infoSalario = new InfoSalario();
        infoSalario.setSalario(10f);
        infoSalario.setCondicionesProductividad("S");
        infoSalario.setCuantiaPagaObjetivos(10f);
        infoSalario.setCuantiaProductividad(10f);
        infoSalario.setHayGuardias("s");
        infoSalario.setObservaciones("s");

        InfoPuesto infoPuesto = new InfoPuesto();
        infoPuesto.setNivel("18");
        infoPuesto.setEquipoTIC("18");
        infoPuesto.setHayOficinaCalidad("S");
        infoPuesto.setHayQueViejar("18");
        infoPuesto.setProyectosFuturos("18");
        infoPuesto.setTipoProyectos("18");
        infoPuesto.setInfoDesarrollo("18");
        infoPuesto.setInfoSistemas("18");

        InfoInstalaciones infoInstalaciones = new InfoInstalaciones();
        infoInstalaciones.setHayDuchas("S");

        InfoServicios infoServicios = new InfoServicios();
        infoServicios.setHayGuarderia("N");
        infoServicios.setDireccion(new Direccion());

        InfoMovilidad infoMovilidad = new InfoMovilidad();
        infoMovilidad.setComisionServicio("S");
        infoMovilidad.setMovilidadInterna("S");
        infoMovilidad.setPosibilidadSalir("S");

        InfoTeletrabajo infoTeletrabajo = new InfoTeletrabajo();
        infoTeletrabajo.setHayTeletrabajo("SI");

        Encuesta encuesta = new Encuesta();
        encuesta.setNombre("Encuesta Test");
        encuesta.setEstado(1L);
        encuesta.setDireccion(direccion);
        encuesta.setInfoHorario(infoHorario);
        encuesta.setInfoSalario(infoSalario);
        encuesta.setInfoPuesto(infoPuesto);
        encuesta.setInfoInstalaciones(infoInstalaciones);
        encuesta.setInfoServicios(infoServicios);
        encuesta.setInfoMovilidad(infoMovilidad);
        encuesta.setInfoTeletrabajo(infoTeletrabajo);
        return encuesta;
    }

    @Test
    void getEncuestas_notAllow() throws Exception {
        // Preparar datos de prueba
        Long id = 1L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(1L);

        Encuesta encuesta2 = new Encuesta();
        encuesta2.setId(2l);
        encuesta2.setEstado(1L);

        when(encuestaRepository.findAll()).thenReturn(List.of(encuesta, encuesta2));

        // Realizar la petición
        mockMvc.perform(get("/encuestas").header("Authorization", user)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(encuesta)))
                .andDo(print())
                .andExpect(status().isOk());

    }

    @Test
    void getEncuestas_Allow() throws Exception {
        // Preparar datos de prueba
        Long id = 1L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(1L);

        Encuesta encuesta2 = new Encuesta();
        encuesta2.setId(2l);
        encuesta2.setEstado(1L);

        when(encuestaRepository.findAll()).thenReturn(List.of(encuesta, encuesta2));

        // Realizar la petición
        mockMvc.perform(get("/encuestas").header("Authorization", admin)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(encuesta)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2));

    }

    @Test
    void getEncuestas_byid() throws Exception {
        // Preparar datos de prueba
        Long id = 1L;
        Encuesta encuesta = new Encuesta();
        encuesta.setId(id);
        encuesta.setEstado(1L);

        when(encuestaRepository.findById(id)).thenReturn(Optional.of(encuesta));

        // Realizar la petición
        mockMvc.perform(get("/encuestas/1").header("Authorization", user)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(encuesta)))
                .andDo(print())
                .andExpect(status().isOk());

    }

}