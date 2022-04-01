import {useState} from "react";
import "../Estilo/Dropfile.css";


function Dropdown({selected, setSelected}){
   const[isActive, setIsActive] = useState(false);
   const options = ["Llamar","Atendiendo","Atendido"];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e)=> 
                setIsActive(!isActive)}>
                {selected}Selecciona una opción <div></div>  ↓         
                <span className="fas fa-caret-down"></span>
            </div>    
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option)=> (
                        <div 
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdow-item">
                                {option}
                             </div>
                    ))}
                    </div>
            )}
            </div>              
);
}

export default Dropdown;