package es.upm.dit.isst.medcon.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import es.upm.dit.isst.medcon.model.Paciente;
import es.upm.dit.isst.medcon.model.Cita;
import es.upm.dit.isst.medcon.model.Medico;
import es.upm.dit.isst.medcon.repository.CitaRepository;
import es.upm.dit.isst.medcon.repository.PacienteRepository;

@RestController
public class MedconController {
    private final CitaRepository citaRepository;
    private final PacienteRepository pacienteRepository;

    public static final Logger log = LoggerFactory.getLogger(MedconController.class);
    
    public MedconController(CitaRepository c, PacienteRepository m) {
        this.citaRepository = c;
        this.pacienteRepository = m;
    }

    @GetMapping("/kiosko")
    List<Paciente> readAll() {
      return (List<Paciente>) pacienteRepository.findAll();
    }

    @GetMapping("/kiosko/{dni}")
    ResponseEntity <Paciente> read(@PathVariable String dni){
      return pacienteRepository.findById(dni).map(paciente ->

      ResponseEntity.ok().body(paciente)

   ).orElse(new ResponseEntity<Paciente>(HttpStatus.NOT_FOUND));

    }

    // @GetMapping("/kiosko/{cita}")
    // List<Cita> readCitasSala(@PathVariable int sala_espera){
    //   List citas = List<Cita> citaRepository.findBySala(sala_espera);
    //   return (List<Cita>) citaRepository.findBySala(sala_espera);
    // }

    /* @PostMapping("/Medcon")
    ResponseEntity<Medcon> create(@RequestBody Medcon newMedcon) throws URISyntaxException {
      Medcon result = medRepository.save(newMedcon);
      return ResponseEntity.created(new URI("/Medcons/" + result.getEmail())).body(result);
    } */

    /* PACIENTE:
     1º Pasar todos los DNIs /kiosko --> HECHO
     2º Para un DNI buscar las citas que tiene /kiosko/{dni} --> HECHO
     3º Confirmar presencia en la bbdd para una cita y subir el ticket /kiosko/dni/{cita}
     4º Para la cita seleccionada, introducir el ticket a la bbdd
    */

    /* SALA ESPERA:
     1º Obtener las citas con varibable atendida=true /espera/{sala} --> MEDIO HECHO
    */

    /* MÉDICO:  ---------------------------------------------------> HACER DESPUÉS
     1º Pasar todos los médico registrados /medico
     2º Para un médico, pasar todas sus citas /medico/citas
     3º Para un médico, pasar todos sus pacientes /medico/pacientes
     4º Para un médico, crear una nueva cita /medico/agenda

    */
 
}
