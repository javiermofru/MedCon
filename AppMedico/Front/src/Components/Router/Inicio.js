import React from 'react';
import "../Estilo/Inicio.css" 
import Info from "./Info.js"
import Chart from "./Chart.js"
import Notes from './Notes';
import WidgetSm from './WidgetSm';

function Inicio() {
    return (
        <div className="home">
           <h1>Inicio</h1> 
           <Info/>
           <Chart/>
           <div className="homeWidget"> 
            <WidgetSm/>
            <Notes />
           </div>
        </div>
    );
}

export default Inicio;