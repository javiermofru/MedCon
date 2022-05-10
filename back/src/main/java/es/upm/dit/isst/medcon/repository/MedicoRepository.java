package es.upm.dit.isst.medcon.repository;


import java.util.*;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import es.upm.dit.isst.medcon.model.Medico;

@Repository
public interface MedicoRepository extends CrudRepository<Medico, String>{

    public List<Medico> findByColegiado(String colegiado);

}
