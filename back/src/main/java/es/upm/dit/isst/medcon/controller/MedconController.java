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
import es.upm.dit.isst.medcon.repository.MedicoRepository;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MedconController {
    private final CitaRepository citaRepository;
    private final PacienteRepository pacienteRepository;
    private final MedicoRepository medicoRepository;


    public static final Logger log = LoggerFactory.getLogger(MedconController.class);
    
    public MedconController(CitaRepository c, PacienteRepository p, MedicoRepository m) {
        this.citaRepository = c;
        c.save(new Cita("H25","30/3/2022", "12:30", false , 123456789, "53880976V" ));
        c.save(new Cita("H65","28/3/2022", "12:30", false , 123456789, "53880978V" ));
        c.save(new Cita("H85","17/3/2022", "12:30", false , 987654321, "53880979V" ));
        c.save(new Cita("H96","30/3/2022", "11:30", false , 123412341, "53880975V" ));
        c.save(new Cita("H34","30/3/2022", "12:00", false , 432143214, "53880976V" ));


        this.pacienteRepository = p;
        p.save(new Paciente("53880976V","Carlos Chinchilla", false));
        p.save(new Paciente("53880978V","Cira Pozo", false));
        p.save(new Paciente("53880979V","Javier Moreno", false));
        p.save(new Paciente("53880975V","Alejandro Mariscal", false));
        p.save(new Paciente("53880974V","Miguel Varas", false));
    

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


    @GetMapping("/cita/{dni}")
    ResponseEntity<Cita> read(@PathVariable String id){

    return citaRepository.findById(id).map(citas -> ResponseEntity.ok().body(citas)

    ).orElse(new ResponseEntity<Cita>(HttpStatus.NOT_FOUND));
  }


    /* @GetMapping("/paciente/{dni}")
    ResponseEntity <Paciente> read(@PathVariable String dni){
      return pacienteRepository.findById(dni).map(paciente ->

      ResponseEntity.ok().body(paciente)

      ).orElse(new ResponseEntity<Paciente>(HttpStatus.NOT_FOUND));

    }

    @GetMapping("/salaespera")
    List<Cita> findAll_by_salaEspera() {
      return (List<Cita>) citaRepository.findAll();
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
