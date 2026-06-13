package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.InfoInstalaciones;

public interface InfoInstalacionesRepository extends JpaRepository<InfoInstalaciones, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOINSTALACIONES " + //
            "(ID, Accesibles, HayDuchas, BañoAdaptado, Gimnasio, Otros) " + //
            "VALUES (:#{#infoInstalaciones.id}, :#{#infoInstalaciones.accesibles}, :#{#infoInstalaciones.hayDuchas}, :#{#infoInstalaciones.bañoAdaptado}, :#{#infoInstalaciones.gimnasio}, :#{#infoInstalaciones.otros});", nativeQuery = true)
    void insertCustom(@Param("infoInstalaciones") InfoInstalaciones infoInstalaciones);

}
