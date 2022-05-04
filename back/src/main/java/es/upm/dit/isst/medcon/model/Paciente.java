package es.upm.dit.isst.medcon.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Paciente {

    @Id
    private String dni;
    private String nombre;
    private Boolean presente;

    @OneToMany(mappedBy = "medico")
    private Set<Cita> citas = new HashSet<>();
    
    public Paciente() {
    }

    public Paciente(String dni, String nombre, Boolean presente) {
        this.dni = dni;
        this.nombre = nombre;
        this.presente = presente;
    
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Set<Cita> getCitas() {
        return citas;
    }

    public void setCitas(Set<Cita> citas) {
        this.citas = citas;
    }
    
    public Boolean getPresente() {
        return presente;
    }

    public void setNombre(Boolean presente) {
        this.presente = presente;
    }


    
}
