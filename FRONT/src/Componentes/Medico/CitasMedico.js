import React from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link } from "react-router-dom";

let datos = JSON.parse(JSON.stringify(data));

export const CitasMedico = () => {
  return (
    <div id="contenedor">
      <div>
        <h1>BIENVENIDO</h1>
      </div>
      <div className="container mt-3 ">
        <h1>Tabla de citas del médico</h1>
        <table id="citas">
          <tr>
            <th>Nombre</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Llamar paciente</th>
          </tr>

          {datos.map((data, index) => (
            <tr>
              <td>{data[0]}</td>
              <td>{data[2]}</td>
              <td>{data[1]}</td>
              <td>
                <Link className="btn btn-success" to="codigo">
                  Llamar paciente
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h1>Añadir nueva cita</h1>
        <form action="../form-result.php" target="_blank">
          <p>
            Nombre paciente</p>
            <input type="text" name="nombre" class="field"/>
          
          <p>
          DNI</p>
            <input type="text" name="dni" class="field"/>
          
          <p>
          Hora</p>
            <input type="time" name="hora" class="field"/>
          
          <p>
          Fecha </p>
            <input type="date" name="fecha" class="field"/>
         
          <p>
            <input type="submit" name="hora" placeholder="Añadir Cita" class="field"/>
          </p>
        </form>
      </div>
    </div>
  );
};
export default CitasMedico;
