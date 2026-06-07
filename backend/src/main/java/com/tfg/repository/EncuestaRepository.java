package com.tfg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tfg.entity.Encuesta;

public interface EncuestaRepository extends JpaRepository<Encuesta, Long> {

    @Query("SELECT u FROM Encuesta u WHERE u.organismo.dir3 = :#{#organismo}")
    List<Encuesta> findByOrganismoId(@Param("organismo") String organismo);

}