import React, { Component, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
//import { Button, ButtonGroup, Container, Table } from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Link, useParams } from 'react-router-dom';
import Inputdni from './Inputdni';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function CitasPaciente(){
    const [citas, setCitas] = useState([]);

    let {dni} = useParams();
    const navigate = useNavigate();

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

                {citas.map((data,index) => (
                  <tr>
                    <td>{data.fecha}</td>
                    <td>{data.hora}</td>
                    <td>{data.llamado ? 'SI' : 'NO'}</td>
                    <td>
                        <button 
                            className='btn m-2 bg-success'
                            onClick={() => navigate(`/paciente/codigo/${citas[index].id}`)}
                            
                        >
                            <FontAwesomeIcon className='btn btn-success' icon={faCheck}/>

                        </button>
                    
                    </td>
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