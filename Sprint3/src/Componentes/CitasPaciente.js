import React from "react";
import { Container, Table } from "react-bootstrap";
import "../Assets/CitasPaciente.css";
import { data } from "../data/dataCitasPaciente.js";
import { Card, Button } from 'react-bootstrap';


let datos = JSON.parse(JSON.stringify(data));

const Fecha = (props) => {
  return (
    <div style={{backgroundColor: 'white'}}>
          <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="col">Día</th>
                  <th scope="col">Hora</th>
                  <th scope="col">Médico</th>
                  <th scope="col">Seleccionar</th>
                </tr>              
                <tr>
                  <th scope="row">
                    <span id="fechaNumero">{props.iden}</span>
                    <br/><br/><br/><br/>                  
                    <span id="MesAño">{props.fecha}</span>
                  </th>
                  <th scope="row" id="hora">
                    <br/>
                    {props.hora}                  
                  </th>
                  <th scope="row" id="doctor">
                    <br/><br/><br/><br/>
                    {props.doctor}
                  </th>
                  <th scope="row" id="asistir">
                    <br/><br/>
                    <Button className="btn btn-success" href='codigo'>
                    Asistir Cita
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          
          </div>
        </div>
      </div>


    {/*}
        <tr>
          <td id="fechaNumero">{props.iden}</td>
          <td id="hora" width="200">
            {props.hora}
          </td>
          <td id="eliminar">
          <Button id='boton1' href='home'>Volver</Button>        </td>
        </tr>
        <tr>
          <td id="MesAño">{props.fecha}</td>
          <td id="doctor">{props.doctor}</td>
          <td id="asistir"> <Button id='btn1' href='codigo'>Asistir Cita</Button></td>
  </tr> */}
      </div>
    );
  };

  const Fechas = () => {
    return datos.map((arrDatos, idx) => {
      return (
        <Fecha
          key={idx}
          iden={arrDatos[0]}
          fecha={arrDatos[1]}
          hora={arrDatos[2]}
          doctor={arrDatos[3]}
        />
      );
    });
  };

export const CitasPaciente = (props) => {
  return (
    <Container>
      <Table responsive cellPadding="20">
        <thead>
          <Fechas />
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
};
export default CitasPaciente;

