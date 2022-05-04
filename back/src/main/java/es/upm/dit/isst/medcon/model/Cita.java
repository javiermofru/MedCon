package es.upm.dit.isst.medcon.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="citas")
public class Cita {
    
    @Id
    private String id;

    private String fecha;
    private String hora; 
    private Boolean llamado;
    private Boolean registrado;
    private int medico;
    private String dni;
    private String ticketTurno;
    

    public Cita() {
    }


    public Cita(String id, String fecha, String hora, Boolean llamado, Boolean registrado, int medico, String dni) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.llamado = llamado;
        this.registrado = registrado;
        this.medico = medico;
        this.dni = dni;
    }


    public boolean getLlamado() {
        return llamado;
    }
    public void setLlamado(Boolean llamado) {
        this.llamado = llamado;
    }

    public boolean getRegistrado() {
        return registrado;
    }
    public void setRegistrado(Boolean registrado) {
        this.registrado = registrado;
    }

    public String getId() {
        return id;
    }


    public void setId(String id) {
        this.id = id;
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

    public int getMedico() {
        return medico;
    }


    public void setMedico(int medico) {
        this.medico = medico;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getTicketTurno() {
        return ticketTurno;
    }

    public void setTicketTurno(String ticketTurno) {
        this.ticketTurno = ticketTurno;
    }
   

}
