package com.isst.medcon.repository;

import java.util.List;

import com.isst.medcon.model.Medcon;

import org.springframework.data.repository.CrudRepository;

public interface MedconRepository extends CrudRepository<Medcon, String> {
    List<Medcon> findByFecha(String Fecha);
    
}
