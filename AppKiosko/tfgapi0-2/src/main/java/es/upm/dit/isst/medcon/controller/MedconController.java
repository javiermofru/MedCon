package es.upm.dit.isst.medcon.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.medcon.model.Medcon;
import es.upm.dit.isst.medcon.repository.MedconRepository;
@RestController
public class MedconController {
    private final MedconRepository medRepository;

    public static final Logger log = LoggerFactory.getLogger(MedconController.class);
    
    public MedconController(MedconRepository m) {
        this.medRepository = m;
    }

    @GetMapping("/bienvenida")
    List<Medcon> readAll() {
      return (List<Medcon>) medRepository.findAll();
    }

    /* @PostMapping("/Medcon")
    ResponseEntity<Medcon> create(@RequestBody Medcon newMedcon) throws URISyntaxException {
      Medcon result = medRepository.save(newMedcon);
      return ResponseEntity.created(new URI("/Medcons/" + result.getEmail())).body(result);
    } */

    @GetMapping("/bienvenida/{dni}")
    ResponseEntity<Medcon> read(@PathVariable String dni) {
      return medRepository.findById(dni).map(Medcon -> ResponseEntity.ok().body(Medcon)).orElse(new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND));

    }

   /*  @PutMapping("/Medcon/{id}")
    ResponseEntity<Medcon> update(@RequestBody Medcon newMedcon, @PathVariable String id) {
      return medRepository.findById(id).map(Medcon -> {
        Medcon.setNombre(newMedcon.getNombre());
        Medcon.setTitulo(newMedcon.getTitulo());
        Medcon.setTutor(newMedcon.getTutor());
        Medcon.setStatus(newMedcon.getStatus());
        Medcon.setNota(newMedcon.getNota());
        Medcon.setMemoria(newMedcon.getMemoria());
        medRepository.save(Medcon);
        return ResponseEntity.ok().body(Medcon);
      }).orElse(new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND));
    } */

    /* @DeleteMapping("Medcon/{id}")
    ResponseEntity<Medcon> delete(@PathVariable String id) {
      medRepository.deleteById(id);
      return new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND);
    } */

    /* @GetMapping("/Medcon/profesor/{id}")
    List<Medcon> readTutor(@PathVariable String id) {
      return (List<Medcon>) medRepository.findByTutor(id);
    } */

    /* @PostMapping("/Medcon/{id}/incrementa")
    ResponseEntity<Medcon> incrementa(@PathVariable String id) {
      return medRepository.findById(id).map(Medcon -> {
        Medcon.setStatus(Medcon.getStatus() + 1);
        medRepository.save(Medcon);
        return ResponseEntity.ok().body(Medcon)
      }).orElse(new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND));  
    } */
 
}
