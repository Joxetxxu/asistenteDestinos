package com.tfg.repository;

import com.tfg.entity.Municipio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MunicipioRepository extends JpaRepository<Municipio, String> {

    @Query("SELECT u FROM Municipio u WHERE u.provincia.CODIGO = :#{#provincia}")
    List<Municipio> findByProvincia(@Param("provincia") String provincia);

}