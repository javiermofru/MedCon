package es.upm.dit.isst.medcon.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Paciente {

    @Id
    private String dni;
    private Integer cipa;
    private String nombre;
    private String apellido;
    @Lob
    private Cita[] citas;

    public Paciente() {
    }
    
    public Paciente(String dni, Integer cipa, String nombre, String apellido, Cita[] citas) {
        this.dni = dni;
        this.cipa = cipa;
        this.nombre = nombre;
        this.apellido = apellido;
        this.citas = citas;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Integer getCipa() {
        return cipa;
    }

    public void setCipa(Integer cipa) {
        this.cipa = cipa;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Cita[] getCitas() {
        return citas;
    }

    public void setCitas(Cita[] citas) {
        this.citas = citas;
    }


    
}
