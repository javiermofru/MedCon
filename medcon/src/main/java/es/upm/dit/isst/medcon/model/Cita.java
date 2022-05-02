package es.upm.dit.isst.medcon.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Cita {
    
    @Id
    private int id;
    private int sala_espera;
    private LocalDate fecha;
    private LocalTime hora;
    private String ticket_consulta;
    private int sala_consulta;
    private int medico;
    private String paciente;
    private boolean atendido;

    public Cita() {
    }

    public Cita(int id, int sala_espera, LocalDate fecha, LocalTime hora, String ticket_consulta, int sala_consulta,
            int medico, String paciente, boolean atendido) {
        this.id = id;
        this.sala_espera = sala_espera;
        this.fecha = fecha;
        this.hora = hora;
        this.ticket_consulta = ticket_consulta;
        this.sala_consulta = sala_consulta;
        this.medico = medico;
        this.paciente = paciente;
        this.atendido = atendido;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSala_espera() {
        return sala_espera;
    }

    public void setSala_espera(int sala_espera) {
        this.sala_espera = sala_espera;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public String getTicket_consulta() {
        return ticket_consulta;
    }

    public void setTicket_consulta(String ticket_consulta) {
        this.ticket_consulta = ticket_consulta;
    }

    public int getSala_consulta() {
        return sala_consulta;
    }

    public void setSala_consulta(int sala_consulta) {
        this.sala_consulta = sala_consulta;
    }

    public int getMedico() {
        return medico;
    }

    public void setMedico(int medico) {
        this.medico = medico;
    }

    public String getPaciente() {
        return paciente;
    }

    public void setPaciente(String paciente) {
        this.paciente = paciente;
    }

    public boolean isAtendido() {
        return atendido;
    }

    public void setAtendido(boolean atendido) {
        this.atendido = atendido;
    }

    
    

}
