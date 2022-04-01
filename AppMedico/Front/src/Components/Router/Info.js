import React from 'react';
import "../Estilo/Info.css" 

export default function Info() {
    return(
    <div className="info">
        <div className="item">
            <span className="title">Citas totales</span> 
            <div>
                <span>14</span>
            </div>
        </div>
        <div className="item">
            <span className="title">Atendidas</span> 
            <div>
                <span>14</span>
            </div>
        </div>
        <div className="item">
            <span className="title">Pendientes</span> 
            <div>
                <span>14</span>
            </div>
        </div>
        <div className="item">
            <span className="title">Citas de la semana</span> 
            <div>
                <span>14</span>
            </div>
        </div>
    </div>
    )
   
}