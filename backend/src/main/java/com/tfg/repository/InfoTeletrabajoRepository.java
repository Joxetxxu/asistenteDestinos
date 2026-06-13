package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.InfoTeletrabajo;

public interface InfoTeletrabajoRepository extends JpaRepository<InfoTeletrabajo, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOTELETRABAJO " + //
            " (ID, HayTeletrabajo, Requisitos, Dias, OtraCCAA, Conciliacion) " + //
            " VALUES(:#{#infoTeletrabajo.id} , :#{#infoTeletrabajo.hayTeletrabajo}, :#{#infoTeletrabajo.requisitos}, :#{#infoTeletrabajo.dias}, :#{#infoTeletrabajo.otraCCAA}, :#{#infoTeletrabajo.conciliacion});", nativeQuery = true)
    void insertCustom(@Param("infoTeletrabajo") InfoTeletrabajo infoTeletrabajo);

}
