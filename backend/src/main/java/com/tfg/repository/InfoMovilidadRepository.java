package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.InfoMovilidad;

public interface InfoMovilidadRepository extends JpaRepository<InfoMovilidad, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOMOVILIDAD " + //
            " (ID, MovilidadInterna, PosibilidadSalir, ComisionServicio) " + //
            " VALUES(:#{#infoMovilidad.id}, :#{#infoMovilidad.movilidadInterna}, :#{#infoMovilidad.posibilidadSalir}, :#{#infoMovilidad.comisionServicio});", nativeQuery = true)
    void insertCustom(@Param("infoMovilidad") InfoMovilidad infoMovilidad);

}