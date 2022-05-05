import React, { Component, useState, useEffect } from 'react';
//import { Button, ButtonGroup, Container, Table } from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Link, useParams } from 'react-router-dom';
import Inputdni from './Inputdni';


export default function CitasPaciente(){
    const [citas, setCitas] = useState([]);

    let {dni} = useParams();

    useEffect(() => {
    fetch(`http://localhost:8080/paciente/${dni}`)
        .then(response => response.json())
        .then(response=> setCitas(response))
    }, [500]);
    console.log(`http://localhost:8080/paciente/${dni}`)
    console.log(citas);

    return (
        <div className='container'>
            <h1>Tabla de citas del paciente</h1>
            <table className='table table-bordered'>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Llamado</th>
                    <th>Registrar presencia</th>
                </tr>

                {citas.map(data => (
                  <tr>
                    <td>{data.fecha}</td>
                    <td>{data.hora}</td>
                    <td>{data.llamado}</td>
                    <td>{data.registrado}</td>
                  </tr>  
                ))}

            </table>
        </div>
    )
    

}
//const dni = useParams();
    //const [citas, setCitas] = useState([]);
  
    /* async function funcionCitas() {
      const res = await fetch ('localhost:8080/pacientes/'+dni)
      const myjson = await res.json();
      setCitas(myjson);
    }
  
    funcionCitas(); */