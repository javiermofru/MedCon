import React from 'react';
import "../Estilo/widgetLg.css" 

function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={'widgetLgButton'+ type}>{type}</button>
    }
    return (
        <div className="widgetLg">
           <h3>Notas</h3> 
           <table className='widgetLgTable'>
               <tr className='widgetLgTr'>
                   <th className='widgetLgTh'>Notas</th>
                   <th className='widgetLgTh'>Estado</th>
               </tr>
               <tr className='widgetLgTr'>
                   <td className='widgetLgNota'>
                        <span className='Nota'>Pedir radiografía de Fco. Javier</span>
                   </td>
                   <td className='estado'><Button type="Urgente"/></td>
               </tr>
               <tr className='widgetLgTr'>
                   <td className='widgetLgNota'>
                        <span className='Nota'>Hacen falta guantes</span>
                   </td>
                   <td className='estado'><Button type="Nueva"/></td>
               </tr>
               <tr className='widgetLgTr'>
                   <td className='widgetLgNota'>
                        <span className='Nota'>Este mes tengo 10 días de vacaciones</span>
                   </td>
                   <td className='estado'><Button type="Info"/></td>
               </tr>
           </table>
           
        </div>
    );
}

export default WidgetLg;