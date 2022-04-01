//TODO: update hover functions on sidebar @alexmariscalr

import React, { useEffect } from "react";
import logo from  '../Assets/logo.jpg'
import { useState } from "react";
import medico1 from '../Assets/medico1.jpg'
import MenuItem from "./MenuItem";


const menuItems = [
    {name: 'Inicio', to: '/', iconClassName:"bi bi-house-fill" },
    {name: 'Agenda', to: '/agenda',iconClassName:"bi bi-calendar2-date-fill"},
    {name: 'Citas', to: '/citas',iconClassName:"bi bi-calendar3-range-fill"},
    {name: 'Pacientes', to: '/pacientes',iconClassName:"bi bi-person-lines-fill"},
    {name: 'Recetas', to: '/recetas',iconClassName:"bi bi-file-earmark-medical-fill"},
    {name: 'Ajustes', to: '/ajustes',iconClassName:"bi bi-gear-wide-connected"}

]

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove("active");
            });
        }
        props.onCollapse(inactive);
    }, [inactive]);
    return ( 
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="medCon"/>
                </div>
                <div onClick={() => {setInactive(!inactive);}} className="toggle-menu-btn">
                    {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>
            <div className="search-controller" >
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder="Buscar"/>
            </div>  

            <div className="divider"></div>
            <div className="main-menu">
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                        <MenuItem 
                            key={index} 
                            name = {menuItem.name}
                            to={menuItem.to} 
                            subMenus = {menuItem.subMenus || [] } 
                            iconClassName= {menuItem.iconClassName}
                            onClick= {() => {
                                if(inactive){
                                    setInactive(false)
                                }
                            }}
                        />))
                    }
                    {/*<li>
                        <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-house-fill"></i>
                        </div>
                        <span>Inicio</span>
                        </a>
                    </li>
                    <MenuItem
                        name = {"Content"}
                        subMenus={[
                            {name: 'Courses'},
                            {name:'Videos'}
                        ]}
                    />
                    <li>
                        <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-calendar2-date-fill"></i>
                        </div>
                        <span>Agenda</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a>Courses</a>
                            </li>
                            <li>
                                <a>Videos</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-calendar3-range-fill"></i>
                        </div>
                        <span>Citas</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-person-lines-fill"></i>
                        </div>
                        <span>Pacientes</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                        <div className="menu-icon">
                        <i class="bi bi-file-earmark-medical-fill"></i>
                        </div>
                        <span>Recetas</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-gear-wide-connected"></i>
                        </div>
                        <span>Ajustes</span>
                        </a>
                    </li>*/}
                    
                    </ul>          
            
            
            </div>
            <div className="side-menu-footer">
                <div className="avatar">
                    <img src={medico1} alt="usuario"/>
                </div>
                <div className="user-info">
                    <h5>Doctor Fernando González</h5>
                    <a href="mailto:drFernandoGonz@hospital.com">drFernandoGonz@hospital.com</a>
                </div>
            </div>
        </div>
        
    );
};

export default SideMenu;