package es.upm.dit.isst.medcon.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Paciente {

    @Id
    private String dni;
    private String nombre;
    private String fechaNacimiento;
    private String sexo;

    
    public Paciente() {
    }

    

    public Paciente(String dni, String nombre, String fechaNacimiento, String sexo) {
        this.dni = dni;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
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
    
    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    
}
