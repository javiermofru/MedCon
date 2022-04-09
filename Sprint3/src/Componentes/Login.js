import React, { Component } from "react";
import "../Assets/Login.css";

export default class Login extends Component {
    render() {
        return (
            <form className="cuadro">
                <h3 className="titulo">BIENVENIDO AL CENTRO DE SALUD</h3>
                <div></div>
                <div></div>
                <label className="cita">Para visualizar sus citas introduzca su DNI </label>
                   <div></div>
                <input  className="dni" placeholder="Introduzca su DNI" />
                <div></div>
                <button type="submit" className="btn">Mostrar citas</button>

            </form>
        );
    }
}