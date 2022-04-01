import React, {useState} from "react";
import { Button, Table } from "reactstrap";
import "../Estilo/Citas.css";

const Citas = () => {
  const [style, setStyle] = useState("cont");
  const changeStyle1 = () =>{
    setStyle("llamar");
  }
  const changeStyle2 = () =>{
    setStyle("atendido");
  }
  const changeStyle3 = () =>{
    setStyle("atendiendo");
  }
  return (
    <div>
      <h1>Citas</h1>
      <h3>Próximas citas</h3>
      <Table className="mt-4">
        <thead>
          <tr>
            <th width="40%">Paciente</th>
            <th width="30%">CIPA</th>
            <th width="15%">Hora</th>
            <th width="15%">Estado</th>
          </tr>
        </thead>
        <tbody>
          <td>xx</td>
          <td>xx</td>
          <td>xx</td>
          <td>
            <div className={style}>  <Button onClick={changeStyle1} className="llamar">Llamar</Button></div>
            <div className={style}>  <Button onClick={changeStyle3} className="atendiendo">Atendiendo</Button></div>
            <div className={style}>  <Button onClick={changeStyle2} className="cont">Atendido</Button></div>
         </td> 
        </tbody>
      </Table>
    </div>
  );
}





export default Citas;
