import React from "react";
import logo from  '../Assets/logo.jpg'

const SideMenu = (props) => {
    return <div className="side-menu">
        <div className="top-section">
            <div className="logo">
                <img src={logo} alt="medCon"/>
            </div>
            <div className="toggle-menu-btn">
                <i class="bi bi-arrow-left-square-fill"></i>
            </div>
        </div>
    
    </div>
}

export default SideMenu;