import React from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasPaciente.css";
import { data } from "../../data/dataCitasMedico";
import { Link } from "react-router-dom";


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
                  <th scope="col">Paciente</th>
                  <th scope="col">Seleccionar</th>
                </tr>              
                <tr>
                  <th scope="row">
                    <span id="fechaNumero">{props.paciente}</span>
                    <br/><br/><br/><br/>                  
                    <span id="MesAño">{props.dia}</span>
                  </th>
                  <th scope="row" id="hora">
                    <br/>
                    {props.mes}                  
                  </th>
                  <th scope="row" id="doctor">
                    <br/><br/><br/><br/>
                    {props.hora}
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
          paciente={arrDatos[0]}
          dia={arrDatos[1]}
          mes={arrDatos[2]}
          hora={arrDatos[3]}
          
        />
      );
    });
  };

export const CitasMedico = (props) => {
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
export default CitasMedico;

