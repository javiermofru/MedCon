package es.upm.dit.isst.medcon.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.http.HttpStatus;

import es.upm.dit.isst.medcon.model.Paciente;
import es.upm.dit.isst.medcon.model.Cita;
import es.upm.dit.isst.medcon.model.Medico;
import es.upm.dit.isst.medcon.repository.CitaRepository;
import es.upm.dit.isst.medcon.repository.PacienteRepository;
import es.upm.dit.isst.medcon.repository.MedicoRepository;

@CrossOrigin(origins = "*")
@RestController
public class MedconController {
    private final CitaRepository citaRepository;
    private final PacienteRepository pacienteRepository;
    private final MedicoRepository medicoRepository;


    public static final Logger log = LoggerFactory.getLogger(MedconController.class);
    
    public MedconController(CitaRepository c, PacienteRepository p, MedicoRepository m) {
        this.citaRepository = c;
        c.save(new Cita("1","30/3/2022", "12:30", false , false , 123456789, "53880976V" ));
        c.save(new Cita("2","28/3/2022", "12:30", false , false , 123456789, "53880978V" ));
        c.save(new Cita("3","17/3/2022", "12:30", false , false ,987654321, "53880979V" ));
        c.save(new Cita("4","30/3/2022", "11:30", false , false ,123412341, "53880975V" ));
        c.save(new Cita("5","30/3/2022", "12:00", false , false , 432143214, "53880976V" ));


        this.pacienteRepository = p;
        p.save(new Paciente("53880976V","Carlos Chinchilla", "30/3/1985"));
        p.save(new Paciente("53880978V","Cira Pozo", "12/8/1994"));
        p.save(new Paciente("53880979V","Javier Moreno", "24/10/2000"));
        p.save(new Paciente("53880975V","Alejandro Mariscal", "3/2/1965"));
        p.save(new Paciente("53880974V","Miguel Varas", "19/7/1999"));
    

        this.medicoRepository = m;
        m.save(new Medico( 123456789 ,"Carlos Chinchilla", 1));
        m.save(new Medico( 987654321 ,"Cira Pozo", 1));
        m.save(new Medico( 123412341 ,"Javier Moreno", 2));
        m.save(new Medico( 432143214 ,"Alejandro Mariscal", 2));

    }

    @GetMapping("/citas")
    public List<Cita> getAllCitas() {
      return (List<Cita>)citaRepository.findAll();

    }

    @GetMapping("/medicos")
    public List<Medico> getAllMedicos() {
      return (List<Medico>)medicoRepository.findAll();

    }

    @GetMapping("/paciente")
    public List<Paciente> getCitas() {
      return (List<Paciente>) pacienteRepository.findAll();
    }


    @GetMapping("/paciente/{dni}")
    public List<Cita> read(@PathVariable String dni){
      return citaRepository.findBydni(dni);
    }

    @GetMapping("/salaespera")
    List<Cita> findAll_by_salaEspera() {
      return (List<Cita>) citaRepository.findAll();
    }
    @PostMapping("/cita/codigo/{id}")

    ResponseEntity<Cita> registraTicket(@PathVariable String id) {

      return citaRepository.findById(id).map(cita -> {

        cita.setTicketTurno(ticket_turno);

        citaRepository.save(cita);

        return ResponseEntity.ok().body(cita);

      }).orElse(new ResponseEntity<Cita>(HttpStatus.NOT_FOUND));  

    }

  /*   
    @PutMapping("/cita/{id}")
    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Cita cita) {
        Cita currentCita = citaRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCita.setTicket(cita.getTicket());
        currentCita = citaRepository.save(cita);

        return ResponseEntity.ok(currentCita);
    } */
 /*    @PutMapping("/medico/{id}")

    public ResponseEntity<Cita> update(@RequestBody Cita newCita, @PathVariable String id) {

      return citaRepository.findById(id).map(cita -> {

        cita.setId(newCita.getId());

        cita.setFecha(newCita.getFecha());

        cita.setHora(newCita.getHora());

        cita.setLlamado(newCita.getLlamado());

        cita.setRegistrado(newCita.getRegistrado());

        cita.setMedico(newCita.getMedico());
        cita.setDni(newCita.getDni());
        cita.setTicketTurno(newCita.getTicketTurno());

        citaRepository.save(cita);

        return ResponseEntity.ok().body(tfg);

      }).orElse(new ResponseEntity<Cita>(HttpStatus.NOT_FOUND));

    } */
    

    @DeleteMapping("cita/{id}")
    public ResponseEntity<Cita> deleteClient(@PathVariable int id) {
      citaRepository.deleteById(Integer.toString(id));
      return ResponseEntity.ok().build();
  }

    /* @GetMapping("/paciente/{dni}")
    ResponseEntity <Paciente> read(@PathVariable String dni){
      return pacienteRepository.findById(dni).map(paciente ->

      ResponseEntity.ok().body(paciente)

      ).orElse(new ResponseEntity<Paciente>(HttpStatus.NOT_FOUND));

    }

    
 */
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