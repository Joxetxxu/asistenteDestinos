package com.tfg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.entity.Organismo;

public interface OrganismoRepository extends JpaRepository<Organismo, String> {

    //List<Organismo> findByNivel(Integer nivel);

}