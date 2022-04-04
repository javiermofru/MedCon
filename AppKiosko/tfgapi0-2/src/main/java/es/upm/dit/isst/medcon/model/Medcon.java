package es.upm.dit.isst.medcon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Medcon {
    @Id @GeneratedValue
    private int id;
    private String paciente;
    private String dni;
    private String medico;
    private String ticket;
    private String fecha;
    private String hora;
    private int status;

    public Medcon(String paciente, String dni, String medico, String ticket, String fecha, String hora, int status) {
        this.paciente = paciente;
        this.dni = dni;
        this.medico = medico;
        this.ticket = ticket;
        this.fecha = fecha;
        this.hora = hora;
        this.status = status;
    }


    public Medcon () {}

    public String getPaciente() {
        return paciente;
    }

    public void setPaciente(String paciente) {
        this.paciente = paciente;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getMedico() {
        return medico;
    }

    public void setMedico(String medico) {
        this.medico = medico;
    }

    public String getTicket() {
        return ticket;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    
}

