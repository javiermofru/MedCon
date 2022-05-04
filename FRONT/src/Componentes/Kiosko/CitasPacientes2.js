import React, { Component } from 'react';
//import { Button, ButtonGroup, Container, Table } from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


class CitasPaciente extends Component {
    state = {
        citas: []
      };
    
    async componentDidMount() {
        const response = await fetch('localhost:8080/pacientes/'+dni);
        const body = await response.json();
        this.setState({citas: body});
    }
 

    render() {
        const {clients} = this.state;
        return (
            <div>
            
            </div>
        )
    }
    

    
}
export default CitasPaciente;

//const dni = useParams();
    //const [citas, setCitas] = useState([]);
  
    /* async function funcionCitas() {
      const res = await fetch ('localhost:8080/pacientes/'+dni)
      const myjson = await res.json();
      setCitas(myjson);
    }
  
    funcionCitas(); */