import React from 'react';
import "../Estilo/widgetLg.css" ;
import Notes from "./Notes";


function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={'widgetLgButton'+ type}>{type}</button>
    }
    return (
        <div className="widgetLg">
           <Notes />
           
        </div>
    );
}

export default WidgetLg;