package es.upm.dit.isst.medcon.model;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medico {
    
    @Id
    private String colegiado;
    private String nombre;
    private String contraseña;

    
    public Medico() {
    }


    public Medico(String colegiado, String nombre, String contraseña) {
        this.colegiado = colegiado;
        this.nombre = nombre;
        this.contraseña = contraseña;
    }

    public String getColegiado() {
        return colegiado;
    }

    public void setColegiado(String colegiado) {
        this.colegiado = colegiado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
  
    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    
    
}
