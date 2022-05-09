import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/SalaEspera.css";
import { Link, useParams } from "react-router-dom";

export default function SalaEspera() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/salaespera`)
        .then(response => response.json())
        .then(response=> setCitas(response))
    startTime()
    }, [500]);
    console.log(`http://localhost:8080/salaespera`)
    console.log(citas);

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
      
      var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      var days = ['Dom', 'Lun', 'Mar', 'Miér', 'Jue', 'Vie', 'Sab'];
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
  

  return (
    <div>
        <div>
          <h1>SALA DE ESPERA</h1>
        </div>
        <div id="clockdate">
            <div class="clockdate-wrapper">
              <div id="clock"></div>
              <div id="date"></div>
            </div>
        </div>
        <table id="citas">
          <thead>
            <tr>
              <th>TURNO</th>
              <th>SALA CONSULTA</th>
            </tr>
          </thead>
          <tbody>
          {citas.map((data, index) => (
            <tr>
              <td>{data.ticketTurno}</td>
              <td>{data.sala_consulta}</td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  );

}
