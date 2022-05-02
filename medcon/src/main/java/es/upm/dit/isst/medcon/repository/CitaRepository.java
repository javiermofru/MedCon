package es.upm.dit.isst.medcon.repository;


import java.util.List;
import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.medcon.model.Cita;

public interface CitaRepository extends CrudRepository<Cita, String>{
    List<Cita> findByPaciente(String paciente);

}
