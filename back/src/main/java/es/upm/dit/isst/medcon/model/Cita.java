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
    private Boolean atendido;

    private int cipa;
    private String dni;
    

    public Cita() {
    }


    public Cita(String id, String fecha, String hora, Boolean atendido, int cipa, String dni) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.atendido= atendido;
        this.cipa = cipa;
        this.dni = dni;
    }


    public boolean getAtendido() {
        return atendido;
    }
    public void setAtendido(Boolean atendido) {
        this.atendido = atendido;
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

    public int getCipa() {
        return cipa;
    }


    public void setCipa(int cipa) {
        this.cipa = cipa;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

   

}
