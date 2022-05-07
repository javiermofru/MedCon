import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
import "./../../Assets/hora.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Crear() {
  
  let {colegiado} = useParams();
  let navigate = useNavigate();

  function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
  }
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
  
  //startTime()
  return (
    
    <div>
    
      <div>
      
        <h1>Añadir nueva cita</h1>
          
          <div id="clockdate">
            <div class="clockdate-wrapper">
              <div id="clock"></div>
              <div id="date"></div>
            </div>
          </div>


      </div>
      <button 
      className='btn btn-lg bg-success rounded-0 text-white mt-3 mb-2 '
      onClick={() => navigate(`/medico/${colegiado}`)}>
        Volver
      </button>

      <div id="formulario" className="form-group">
        <form className=" mt-2 " action="../form-result.php" target="_blank">
          <p>Nombre paciente</p>
          <input type="text" name="nombre" class="field" />

          <p>DNI</p>
          <input type="text" name="dni" class="form-control" />

          <p>Especialidad</p>
          <input type="text" name="dni" class="field" />

          <p>Hora</p>
          <input type="time" name="hora" class="field" />

          <p>Fecha </p>
          <input type="date" name="fecha" class="field" />

          <p>
            <input className="btn btn-success" type="submit" id="hora1" value="Añadir Cita" class="field" />
          </p>
        </form>
      </div>
    </div>
  );
}
