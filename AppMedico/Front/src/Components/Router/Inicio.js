import React from 'react';
import "../Estilo/Inicio.css" 
import Info from "./Info.js"
import Chart from "./Chart.js"

function Inicio() {
    return (
        <div className="home">
           <h1>Inicio</h1> 
           <Info/>
           <Chart/>
        </div>
    );
}

export default Inicio;