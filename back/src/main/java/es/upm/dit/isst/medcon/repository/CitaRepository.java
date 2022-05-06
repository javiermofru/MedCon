package es.upm.dit.isst.medcon.repository;


import java.util.*;
import java.util.stream.Collectors;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import es.upm.dit.isst.medcon.model.Cita;

@Repository
public interface CitaRepository extends CrudRepository<Cita, String>{

    public List<Cita> findByid(String id);
    public List<Cita> findBydni(String DNI);
    public List<Cita> findBymedico(String medico);

}
