package com.isst.medcon.model;

import javax.persistence.*;

@Entity
public class Medcon {

    @Id
    private Integer CIPA;

    private String Fecha;
    private String Hora;
    private String Paciente;
    private String Estado;
    
    public Medcon() {
    }

    public Integer getCIPA() {
        return CIPA;
    }

    public void setCIPA(Integer cIPA) {
        CIPA = cIPA;
    }

    public String getFecha() {
        return Fecha;
    }

    public void setFecha(String fecha) {
        Fecha = fecha;
    }

    public String getHora() {
        return Hora;
    }

    public void setHora(String hora) {
        Hora = hora;
    }

    public String getPaciente() {
        return Paciente;
    }

    public void setPaciente(String paciente) {
        Paciente = paciente;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

    
}
