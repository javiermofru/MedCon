import React, {useEffect, useState, useParams} from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasPaciente.css";
import { data } from "../../data/dataCitasPaciente.js";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


//let datos = JSON.parse(JSON.stringify(data));


 


const Fecha = (props) => {
  const {dni} = useParams();
  const [citas, setCitas] = useState([]);

  async function funcionCitas() {
    const res = await fetch ('localhost:8080/pacientes/'+dni)
    const myjson = await res.json();
    setCitas(myjson);
  }


  funcionCitas();

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
                    <Link className="btn btn-success" to="codigo">
                    Asistir Cita
                    </Link>
                  </th>
                </tr>
              </tbody>
            </table>
          
          </div>
        </div>
      </div>

      </div>
    );
  };

/*   const Fechas = () => {
    return citas.map((c, idx) => {
      return (
        <Fecha
          key={idx}
          iden={c.id}
          fecha={c.fecha}
          hora={c.hora}
          doctor={c.medico}
        />
      );
    });
  };  */

export const CitasPaciente = (props) => {
  return (
    <Container>
      <Table responsive cellPadding="20">
        <thead>
          {/* <Fechas /> */}
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
};
export default CitasPaciente;

