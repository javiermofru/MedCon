package es.upm.dit.isst.medcon.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
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
        c.save(new Cita("1","12/5/2022", "9:30", false , false , "123456789", "53880976V", null, "Traumatología" , 1,"Carlos Chinchilla"));
        c.save(new Cita("2","28/3/2022", "10:00", false , false , "123456789", "53880978V", null, "Radilogía", 1 ,"Cira Pozo"));
        c.save(new Cita("3","17/3/2022", "10:30", true , true ,"987654321", "53880979V", "V89", "Traumatología", 2 ,"Javier Moreno"));
        c.save(new Cita("4","30/3/2022", "11:00", true , true ,"123412341", "53880975V", "Q67", "Ginecología",2,"Alejandro Mariscal" ));
        c.save(new Cita("5","30/3/2022", "11:30", true , true , "432143214", "53880976V", "K45", "Análisis",1,"Carlos Chinchilla" ));
        c.save(new Cita("6","12/5/2022", "12:00", false , false , "123456789", "53880971V", null, "Traumatología" , 1,"Carlos Sanchez"));
        c.save(new Cita("7","12/5/2022", "12:30", false , false , "123456789", "53880976V", null, "Radilogía" , 1,"Cira Varas"));
        c.save(new Cita("8","12/5/2022", "13:00", false , false , "123456789", "53880973V", null, "Análisis" , 2,"Javier Marisca"));
        c.save(new Cita("9","12/5/2022", "13:30", false , false , "123456789", "53880977V", null, "Análisis" , 2,"Alejandro Moreno"));
        c.save(new Cita("10","12/5/2022", "14:00", false , false , "123456789", "53880976V", null, "Traumatología" , 1,"Miguel Pozo"));
        c.save(new Cita("12","12/5/2022", "14:30", false , false , "123456789", "53880912V", null, "Traumatología" , 1,"Javier Sanchez"));
        c.save(new Cita("12","17/3/2022", "15:00", true , true ,"987654321", "53880934V", "W77", "Traumatología", 2 ,"Cira Moreno"));
        c.save(new Cita("13","17/3/2022", "15:30", true , true ,"987654321", "53880956V", "M19", "Traumatología", 2 ,"Carlos Mariscal"));
        c.save(new Cita("14","17/3/2022", "16:30", true , true ,"987654321", "53880949V", "A84", "Traumatología", 2 ,"Alvaro Pozo"));


        this.pacienteRepository = p;
        p.save(new Paciente("53880976V","Carlos Chinchilla", "30/3/1985", "Hombre","Autismo"));
        p.save(new Paciente("53880978V","Cira Pozo", "12/8/1994", "Mujer", "Cáncer"));
        p.save(new Paciente("53880979V","Javier Moreno", "26/07/2000", "Hombre", "Déficit de atención e hiperactividad"));
        p.save(new Paciente("53880975V","Alejandro Mariscal", "3/2/1965", "Hombre", "Asma"));
        p.save(new Paciente("53880974V","Miguel Varas", "19/7/1999", "Hombre", " Artritis"));
        p.save(new Paciente("53880971V","Carlos Sanchez", "30/3/1985", "Hombre","Autismo"));
        p.save(new Paciente("53880972V","Cira Varas", "12/8/1994", "Mujer", "Cáncer"));
        p.save(new Paciente("53880973V","Javier Mariscal", "26/07/2000", "Hombre", "Déficit de atención e hiperactividad"));
        p.save(new Paciente("53880977V","Alejandro Moreno", "3/2/1965", "Hombre", "Asma"));
        p.save(new Paciente("53880920V","Miguel Pozo", "19/7/1999", "Hombre", " Artritis"));
        p.save(new Paciente("53880912V","Javier Mariscal", "30/3/1985", "Hombre","Autismo"));
        p.save(new Paciente("53880934V","Cira Moreno", "12/8/1994", "Mujer", "Cáncer"));
        p.save(new Paciente("53880956V","Carlos Mariscal", "26/07/2000", "Hombre", "Déficit de atención e hiperactividad"));
        p.save(new Paciente("53880967V","Miguel Moreno", "3/2/1965", "Hombre", "Asma"));
        p.save(new Paciente("53880949V","Alvaro Pozo", "19/7/1999", "Hombre", " Artritis"));
    

        this.medicoRepository = m;
        m.save(new Medico( "123456789" ,"Carlos Chinchilla", "medico1"));
        m.save(new Medico( "987654321" ,"Cira Pozo", "medico2"));
        m.save(new Medico( "123412341" ,"Javier Moreno", "medico3"));
        m.save(new Medico( "432143214" ,"Alejandro Mariscal", "medico4"));

    }


    @GetMapping("/paciente")
    public List<Paciente> getCitas() {
      return (List<Paciente>) pacienteRepository.findAll();
    }


    @GetMapping("/paciente/{dni}")
    public List<Cita> read(@PathVariable String dni){
      return citaRepository.findBydni(dni);
    }
    
    @GetMapping("/medico/{medico}")
    public List<Cita> citasMedico(@PathVariable String medico){
      return citaRepository.findBymedico(medico);
    }

    @GetMapping("/salaespera")
    List<Cita> findAll_by_salaEspera() {
      var citas = new ArrayList<Cita>();
      var resultado = new ArrayList<Cita>();
      citaRepository.findAll().forEach(citas::add);

      for(Cita cita:citas){
        if(cita.getLlamado()==true) resultado.add(cita);
      }
      return resultado;
    }
    

    @GetMapping("/medico/cita/{id}")
    List<Paciente> tablaMedico(@PathVariable String id){
      Cita cita = citaRepository.findById(id).get();
      String dni = cita.getDni();
      
      return pacienteRepository.findBydni(dni);


    }
    




    @PostMapping("/paciente/codigo/{id}")
    ResponseEntity<Cita> registraTicket(@PathVariable String id, @RequestBody String c) {

      return citaRepository.findById(id).map(cita -> {

        cita.setTicketTurno(c);
        cita.setRegistrado(true);

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

    @CrossOrigin(origins = "*")
    @PostMapping("/medico/crear")
    ResponseEntity<Cita> newCita(@RequestBody Cita newCita) {
      
      Cita cita = new Cita();

      cita.setId(newCita.getId());

      cita.setFecha(newCita.getFecha());

      cita.setHora(newCita.getHora());

      cita.setLlamado(newCita.getLlamado());

      cita.setRegistrado(newCita.getRegistrado());

      cita.setMedico(newCita.getMedico());
      cita.setDni(newCita.getDni());
      cita.setTicketTurno(newCita.getTicketTurno());
      cita.setRazon(newCita.getRazon());
      cita.setSala_consulta(newCita.getSala_consulta());
      cita.setnombrePaciente(newCita.getnombrePaciente());
      citaRepository.save(cita);

      return ResponseEntity.ok().build();

    }
    

    @PostMapping("/medico/crear/2")

    ResponseEntity<Cita> create(@RequestBody Cita newCita) throws URISyntaxException {

      Cita result = citaRepository.save(newCita);

      return ResponseEntity.created(new URI("/medico/{colegiado}/crear" + result.getId())).body(result);

    }
    
    @PostMapping("/medico/{colegiado}/{id}")
    public ResponseEntity<Cita> deleteClient(@PathVariable String id) {
      citaRepository.deleteById(id);
      return ResponseEntity.ok().build();
    }

    @PutMapping("/medico/{colegiado}/llamar/{id}")
    ResponseEntity<Cita> registraTicket(@PathVariable String id) {
      return citaRepository.findById(id).map(cita -> {
        cita.setLlamado(true);
        citaRepository.save(cita);
        return ResponseEntity.ok().body(cita);
      }).orElse(new ResponseEntity<Cita>(HttpStatus.NOT_FOUND));  
    } 

    @GetMapping("/medico/{colegiado}/pacientes/{dni}")
    public List<Paciente> readPacientes (@PathVariable String dni){
      return pacienteRepository.findBydni(dni);
    }

    @GetMapping("/medico/pacientes")
    public List<Paciente> getPacientes() {
      return (List<Paciente>) pacienteRepository.findAll();

    }

    @GetMapping("/medico")
    public List<Medico> getMedicos(){
      return (List<Medico>) medicoRepository.findAll();
    }



    /* @PostMapping("/Medcon")
    ResponseEntity<Medcon> create(@RequestBody Medcon newMedcon) throws URISyntaxException {
      Medcon result = medRepository.save(newMedcon);
      return ResponseEntity.created(new URI("/Medcons/" + result.getEmail())).body(result);
    } */

    /* PACIENTE:
     1º Para un DNI buscar las citas que tiene /kiosko/{dni} --> HECHO
     2º Confirmar presencia en la bbdd para una cita y subir el ticket /kiosko/dni/{cita} --> HECHO
     3º Para la cita seleccionada, introducir el ticket a la bbdd --> HECHO
    */

    /* SALA ESPERA:
     1º Obtener las citas con varibable llamado=true /espera/{sala} --> HECHO
    */

    /* MÉDICO: 
     1º Pasar todos los médico registrados /medico --> HECHO
     2º Para un médico, pasar todas sus citas /medico/citas --> HECHO
     3º Pasar todos los pacientes /medico/pacientes --> HECHO
     4º Para un médico, crear una nueva cita /medico/agenda
     5º Para un médico, borrar una cita --> MEDIO HECHO

    */
 
}