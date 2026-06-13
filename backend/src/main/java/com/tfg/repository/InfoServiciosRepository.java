package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.InfoServicios;

public interface InfoServiciosRepository extends JpaRepository<InfoServicios, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOSERVICIOS(ID,HayApartamiento,HayCargador,CondicionesParking,HayAparcabicis,HayAutobuses,HayComedor,HayCafeteria,PrecioMenu,HayGuarderia,CuantiaGuarderia,ID_DIRECCION) "
            + //
            " VALUES(:#{#infoServicios.id}, :#{#infoServicios.hayApartamiento}, :#{#infoServicios.hayCargador}, :#{#infoServicios.condicionesParking}, :#{#infoServicios.hayAparcabicis}, "
            + //
            "    :#{#infoServicios.hayAutobuses}, :#{#infoServicios.hayComedor}, :#{#infoServicios.hayCafeteria}, :#{#infoServicios.precioMenu}, :#{#infoServicios.hayGuarderia}, :#{#infoServicios.cuantiaGuarderia}, :#{#infoServicios.direccion.id});", nativeQuery = true)

    void insertCustom(@Param("infoServicios") InfoServicios infoServicios);
}
