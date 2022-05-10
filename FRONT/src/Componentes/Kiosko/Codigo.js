import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/codigo.css';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function Codigo() {
    const navigate = useNavigate();
    const [citas, setCitas] = useState([]);
    const [numero, setNumero] = useState("");
    let {citaId} = useParams();

    useEffect(() => {
        let c = getAleatorio()
        c.join("")
        setNumero(c)
        console.log(c)
        fetch(`http://localhost:8080/paciente/codigo/${citaId}`, {
          method:'POST', 
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(c.join(""))
        })  
        
        
    }, []);

    const getAleatorio = () => {
      //Número de dos cifras
      var aleatorio = Math.floor(88*Math.random()+11);  
      //Cifra aleatoria
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let codigo = []
      codigo[0]=characters.charAt(Math.floor(Math.random()*25));        
      codigo.push(aleatorio);
      return codigo
    } 
      
      //console.log(citas);
      console.log(numero)
      console.log(`http://localhost:8080/paciente/codigo/${citaId}`)

      // let aleatorio = Math.floor(88*Math.random()+11);
      // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // let codigo = [];
      // codigo[0]=characters.charAt(Math.floor(Math.random()*25)); 
      // codigo.push(aleatorio);
      // setNumero(codigo.join(""));    

    
  return (
    <div className="codigo">
      <div className='codigoInicio'>
    
        <Card className='text-center' >
        
        <Card.Body >
            <Card.Title className='display-4'>BIENVENIDO, </Card.Title>
            <Card.Text >
            SU CÓDIGO PARA SER ATENDIDO ES: 
            </Card.Text>
            <Card.Title className='h1 display-2' id='code'>
              {numero}
            </Card.Title>


            <div className='btn-group-vertical'>
              <Button className='btn btn-success btn-lg mt-2 rounded-0' >IMPRIMIR</Button>
              <Button
              onClick={() => navigate('/')}
              className='btn btn-success btn-lg mt-2 rounded-0' 
              id='btn'>
              VOLVER
              </Button>
            </div>
        </Card.Body>
        
  </Card>
      
    </div>
    </div>
  );
}
