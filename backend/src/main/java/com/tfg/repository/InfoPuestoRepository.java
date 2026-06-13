package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.InfoPuesto;

public interface InfoPuestoRepository extends JpaRepository<InfoPuesto, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOPUESTO\r\n" + //
            "(ID, Nivel, EquipoTIC, InfoSistemas, InfoDesarrollo, TipoProyectos, ProyectosFuturos, HayOficinaCalidad, Funciones, HayQueViejar) "
            + //
            "VALUES(:#{#infoPuesto.id}, :#{#infoPuesto.nivel}, :#{#infoPuesto.equipoTIC}, :#{#infoPuesto.infoSistemas}, :#{#infoPuesto.infoDesarrollo}, :#{#infoPuesto.tipoProyectos}, :#{#infoPuesto.proyectosFuturos}, :#{#infoPuesto.hayOficinaCalidad}, :#{#infoPuesto.funciones}, :#{#infoPuesto.hayQueViejar});", nativeQuery = true)
    void insertCustom(@Param("infoPuesto") InfoPuesto infoPuesto);

}