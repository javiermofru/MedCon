import React, { useEffect } from "react";
import "../../Assets/Paciente/Login.css";
import {Link} from 'react-router-dom'
import { useState } from "react";
import {Button, Card} from "react-bootstrap"
import { useNavigate } from "react-router-dom";



export default function InputColegiado() {
    const [numero, setNumero]= useState("");
    const [password, setPassword] = useState("");
    const [medicos, setMedicos] = useState([]);
    const [resultado, setResultado] = useState (false);

    useEffect(() => {
        fetch("http://localhost:8080/medico")
        .then((response) => response.json())
        .then((response) => setMedicos(response))

    },[])

    function autenticado() {
        medicos.map ((data,index) => {
            if(data.colegiado === numero) {
                 if(data.contraseña === password)
                    setResultado(true)
            }
        })
        if (resultado) {
            return (true)
        }
        else return false;
            
    }



    function handleNumero(event) {
        setNumero(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }
    let navigate = useNavigate();

    console.log(resultado)

    return (
    
        <div>
            
                <input
                    className="form-control"
                    placeholder="Introduzca su número de colegiado"
                    type="text"
                    name="name"
                    onChange={handleNumero}
                    pattern="[0-9]{9}"
                    value={numero}
                />
                <input
                    className="form-control mt-2"
                    placeholder="Introduzca su contraseña"
                    type="password"
                    name="name"
                    onChange={handlePassword}
                    value={password}
                />
                <button
                    className="btn btn-success mt-2" 
                    onClick={() => 
                        (autenticado()) ? navigate(`/medico/${numero}`) : ""}  
                    >                    
                    Ver mis citas
                </button>
           
        </div>

        
    );
}