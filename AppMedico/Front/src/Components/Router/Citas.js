import React from "react";
import { Button, Table } from "reactstrap";

function Citas() {
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
            <Button>Atendido</Button>
          </td>
        </tbody>
      </Table>
    </div>
  );
}

export default Citas;
