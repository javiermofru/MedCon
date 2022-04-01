import React from 'react';
import "../Estilo/widgetSm.css" 

function WidgetSm() {
    return (
        <div className="widgetSm">
           <span className='widgetSmTitle'>Pruebas pendientes</span>
           <div></div>
           <ul className='widgetSmList'>
               <li className='widgetSmListItem'>
                   <span className="nombrePrueba">Análisis Clínicos</span>
                   <span className="numPrueba">15</span>
               </li>
               <div></div>
               <li className='widgetSmListItem'>
                   <span className="nombrePrueba">Radiografías</span>
                   <span className="numPrueba">4</span>
               </li>
               <div></div>
               <li className='widgetSmListItem'>
                   <span className="nombrePrueba">Ecografías</span>
                   <span className="numPrueba">2</span>
               </li>
               <div></div>
               <li className='widgetSmListItem'>
                   <span className="nombrePrueba">Resonancias</span>
                   <span className="numPrueba">1</span>
               </li>
           </ul>
        </div>
    );
}

export default WidgetSm;