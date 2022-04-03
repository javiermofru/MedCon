import React from 'react';
import "../Estilo/Chart.css" 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Ajustes() {
    const data = [
        {
          name: '9am',
          Pacientes: 2
        },
        {
          name: '10am',
          Pacientes: 4
        },
        {
          name: '11am',
          Pacientes: 7
        },
        {
          name: '12am',
          Pacientes: 10
        },
        {
          name: '1pm',
          Pacientes: 7
        },
        {
          name: '2pm',
          Pacientes: 3
        },
        {
          name: '3pm',
          Pacientes: 1
        },
        {
            name: '4pm',
            Pacientes: 4
          },
          {
            name: '5pm',
            Pacientes: 7
          },
          {
            name: '6pm',
            Pacientes: 9
          },
          {
            name: '7pm',
            Pacientes: 10
          },
          {
            name: '8pm',
            Pacientes: 8
          },
          {
            name: '9pm',
            Pacientes: 3
          },
      ];

    return (
        <div className="chart">
           <h3 className='tittle'>Datos de hoy</h3>
           <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart className="graf" data={data}>
                <XAxis dataKey="name" strok="#5550bd"/>
                <YAxis/>
                <Line type="monotone" dataKey="Pacientes" strok="#5550bd"/>
                <Tooltip/>
                <Legend/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            </LineChart>
           
           
            </ResponsiveContainer>
        </div>
      
    );
}

export default Ajustes;