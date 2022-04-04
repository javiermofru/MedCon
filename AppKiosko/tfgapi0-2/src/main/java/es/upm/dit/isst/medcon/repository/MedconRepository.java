package es.upm.dit.isst.medcon.repository;
import java.util.List;
import org. springframework.data.repository.CrudRepository;

import es.upm.dit.isst.medcon.model.Medcon;


public interface MedconRepository extends CrudRepository<Medcon, String> {
    List<Medcon> findById(int id);
}

