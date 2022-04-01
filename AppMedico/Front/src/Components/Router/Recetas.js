import React from "react";
//import { Button, Table } from 'reactstrap';

function Recetas () {
    return (
    <div>
        <div  flexDirection='column'>      
            <h1>DATOS MÉDICO</h1>  
            <div flexDirection='row'> 
                <h3>NOMBRE</h3>
                <input type="text" id="nombre" placeholder ="Introducir nombre"/>
                <h3>APELLIDOS</h3>
                <input type="text" id="apellidos" placeholder ="Introducir apellidos"/>
                <h3>Nº DE COLEGIADO</h3>
                <input type="text" id="colegiado" placeholder ="Introducir nº de colegiado"/>
                <h3>ESPECIALIDAD</h3>
                <input type="text" id="especialidad" placeholder ="Introducir especialidad"/>
            </div>
        </div>
        <div  flexDirection='column'>       
            <h1>DATOS PACIENTE</h1>  
            <div flexDirection='row'> 
                <h3>NOMBRE</h3>
                <input type="text" id="nombre" placeholder ="Introducir nombre"/>
                <h3>APELLIDOS</h3>
                <input type="text" id="apellidos" placeholder ="Introducir apellidos"/>
                <h3>CIPA</h3>
                <input type="text" id="cipa" placeholder ="Introducir CIPA"/>
                <h3>FECHA DE NACIMIENTO</h3>
                <input type="text" id="nacimiento" placeholder ="Introduzcir fecha de nacimiento"/> 
            </div>
        </div>
        <div  flexDirection='column'>       
            <h1>PRESCRIPCIÓN</h1>  
            <div flexDirection='row'> 
                <h3>PRINCIPIO ACTIVO</h3>
                <input type="text" id="principio" placeholder ="Introducir principio activo"/>
                <h3>FORMA FARMACÉUTICO</h3>
                <input type="text" id="forma" placeholder ="Introducir forma"/>
                <h3>UNIDADES POR ENVASE</h3>
                <input type="text" id="unidades" placeholder ="Introducir unidades"/>
                <h3>VÍA DE ADMINISTRACIÓN</h3>
                <input type="text" id="via" placeholder ="Introduzcir vía"/>
                <h3>DOSIS POR UNIDAD</h3>
                <input type="text" id="dosis" placeholder ="Introduzcir dosis/unidad"/>
                <h3>PAUTA</h3>
                <input type="text" id="pauta" placeholder ="Introduzcir pauta"/>
                <h3>COMENTARIOS</h3>
                <input type="text" id="comentarios" placeholder ="Introduzcir comentarios"/>
            </div>
        </div>
    </div>
    );
}

export default Recetas ;