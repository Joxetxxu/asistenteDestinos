package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.InfoSalario;

public interface InfoSalarioRepository extends JpaRepository<InfoSalario, Number> {

    @Modifying
    @Query(value = "INSERT INTO TFG.INFOSALARIO(ID, HayProductividad, CuantiaProductividad, CondicionesProductividad, HayPagaObjetivos, CuantiaPagaObjetivos, HayGuardias, Observaciones, Salario) "
            + //
            " VALUES(:#{#infoSalario.id}, :#{#infoSalario.hayProductividad}, :#{#infoSalario.cuantiaProductividad}, :#{#infoSalario.condicionesProductividad}, :#{#infoSalario.hayPagaObjetivos}, :#{#infoSalario.cuantiaPagaObjetivos}, :#{#infoSalario.hayGuardias}, :#{#infoSalario.observaciones}, :#{#infoSalario.salario});", nativeQuery = true)
    void insertCustom(@Param("infoSalario") InfoSalario infoSalario);
}