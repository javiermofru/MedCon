package es.upm.dit.isst.medcon.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Medico {
    
    @Id
    private int CIPA;

    private String nombre;
    private int sala_consulta;

    @OneToMany(mappedBy = "medico")
    private Set<Cita> citas = new HashSet<>();

    public Medico() {
    }

    public Medico(int CIPA, String nombre, int sala_consulta) {
        this.CIPA = CIPA;
        this.nombre = nombre;
        this.sala_consulta = sala_consulta;
    }

    public Integer getCIPA() {
        return CIPA;
    }

    public void setCIPA(Integer cIPA) {
        CIPA = cIPA;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getSala_consulta() {
        return sala_consulta;
    }

    public void setSala_consulta(int sala_consulta) {
        this.sala_consulta = sala_consulta;
    }

    public Set<Cita> getCitas() {
        return citas;
    }

    public void setCitas(Set<Cita> citas) {
        this.citas = citas;
    }

    
    
    
    
}
