package es.upm.dit.isst.medcon.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.medcon.model.Paciente;

public interface PacienteRepository extends CrudRepository<Paciente, String> {
    List<Paciente> findByDni(String dni);    
}
