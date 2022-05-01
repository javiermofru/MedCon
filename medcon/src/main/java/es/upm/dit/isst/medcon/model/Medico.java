package es.upm.dit.isst.medcon.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medico {
    
    @Id
    private int colegiado;
    private String nombre;
    private String apellido;
    private String email;
    private String contraseña;
    private int sala_consulta;

    public Medico() {
    }
    
    public Medico(int colegiado, String nombre, String apellido, String email, String contraseña, int sala_consulta) {
        this.colegiado = colegiado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contraseña = contraseña;
        this.sala_consulta = sala_consulta;
    }
    public int getColegiado() {
        return colegiado;
    }
    public void setColegiado(int colegiado) {
        this.colegiado = colegiado;
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
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getContraseña() {
        return contraseña;
    }
    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    public int getSala_consulta() {
        return sala_consulta;
    }
    public void setSala_consulta(int sala_consulta) {
        this.sala_consulta = sala_consulta;
    }
}
