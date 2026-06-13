package com.tfg.repository;

import com.tfg.entity.InfoHorario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface InfoHorarioRepository extends JpaRepository<InfoHorario, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOHORARIO " +
            "(ID, Horario, TardesObligatorias, HayHorarioVerano, HorarioVeranoCondiciones) " +
            "VALUES(:#{#infohorario.id} , :#{#infohorario.horario}, :#{#infohorario.tardesObligatorias}, :#{#infohorario.hayHorarioVerano}, :#{#infohorario.horarioVeranoCondiciones});", nativeQuery = true)
    void insertCustom(@Param("infohorario") InfoHorario infohorario);

}