 package es.upm.dit.isst.medcon;

 import static org.junit.jupiter.api.Assertions.assertEquals;
 import static org.junit.jupiter.api.Assertions.assertFalse;
 import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;
import java.util.Optional;

 import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.context.SpringBootTest;

 import es.upm.dit.isst.medcon.model.Cita;
 import es.upm.dit.isst.medcon.repository.CitaRepository;

 import es.upm.dit.isst.medcon.model.Medico;
 import es.upm.dit.isst.medcon.repository.MedicoRepository;

 import es.upm.dit.isst.medcon.model.Paciente;
 import es.upm.dit.isst.medcon.repository.PacienteRepository;
 

 @SpringBootTest
 public class TestMedConService{
     @Autowired
     private CitaRepository repoCitas;

     @Test
     final void testCita(){
         Cita cita = new Cita();
         cita.setId("10");
         cita.setFecha("20/05/2022");
         cita.setHora("16:00");
         cita.setMedico("Luis García");
         cita.setDni("05333441V");
         cita.setTicketTurno("F34");
         cita.setRazon("Traumatología");
         cita.setSala_consulta(2);
         cita.setnombrePaciente("Jose Luis");

         repoCitas.save(cita);

         Optional<Cita> cita2= repoCitas.findById("10");
         assertEquals(cita2.get().getFecha(), cita.getFecha());
         assertEquals(cita2.get().getHora(), cita.getHora());
         assertEquals(cita2.get().getMedico(), cita.getMedico());
         assertEquals(cita2.get().getTicketTurno(), cita.getTicketTurno());
         assertEquals(cita2.get().getSala_consulta(), cita.getSala_consulta());
         assertEquals(cita2.get().getnombrePaciente(), cita.getnombrePaciente());

         cita.setDni("21342432F");
         cita.setRazon("Dermatología");

         repoCitas.save(cita);
         cita2=repoCitas.findById("10");
         assertNotEquals(cita2.get().getDni(), "05333441V");
         assertNotEquals(cita2.get().getRazon(), "Traumatología");

         repoCitas.delete(cita);
         cita2 = repoCitas.findById("10");
         assertFalse(cita2.isPresent());
    }
    
    @Autowired
    private MedicoRepository repoMedicos;
    @Test
     final void testMedico(){
         Medico medico = new Medico();
         medico.setColegiado("987654321");
         medico.setNombre("Luis García");
         medico.setContraseña("contraseña1234");

         repoMedicos.save(medico);

         Optional<Medico> medico2= repoMedicos.findById("987654321");
         assertEquals(medico2.get().getColegiado(), medico.getColegiado());
         assertEquals(medico2.get().getContraseña(), "contraseña1234");

         medico.setNombre("Carlos Varas");

         repoMedicos.save(medico);
         medico2=repoMedicos.findById("987654321");
         assertNotEquals(medico2.get().getNombre(), "Luis García");

         repoMedicos.delete(medico);
         medico2 = repoMedicos.findById("987654321");
         assertFalse(medico2.isPresent());
    }

    @Autowired
    private PacienteRepository repoPacientes;
    @Test
     final void testPaciente(){
         Paciente paciente = new Paciente();
         paciente.setDni("12345678V");
         paciente.setNombre("Marcos García");
         paciente.setFechaNacimiento("23/03/1998");
         paciente.setSexo("hombre");

         repoPacientes.save(paciente);

         Optional<Paciente> paciente2 = repoPacientes.findById("12345678V");
         assertEquals(paciente2.get().getDni(), "12345678V");
         assertEquals(paciente2.get().getNombre(), paciente.getNombre());

         paciente.setFechaNacimiento("11/11/1999");
         paciente.setSexo("Mujer");

         repoPacientes.save(paciente);
         paciente2=repoPacientes.findById("12345678V");
         assertNotEquals(paciente2.get().getFechaNacimiento(),"23/03/1998");
         assertNotEquals(paciente2.get().getSexo(),"Hombre");


         repoPacientes.delete(paciente);
         paciente2 = repoPacientes.findById("12345678V");
         assertFalse(paciente2.isPresent());
    }


 }
