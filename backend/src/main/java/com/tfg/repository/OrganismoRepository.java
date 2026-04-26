package com.tfg.repository;

import com.tfg.entity.Organismo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrganismoRepository extends JpaRepository<Organismo, String> {

    List<Organismo> findByNivel(Integer nivel);

}