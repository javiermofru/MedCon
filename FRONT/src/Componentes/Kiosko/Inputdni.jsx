import React, {useState} from "react";
import "../../Assets/Paciente/Login.css";
import {Link} from 'react-router-dom'

export default class Inputdni extends React.Component{

  state = {
    values : {
      DNI:''
    }
  }


  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    })
  }

  handleBlur = e => {
    if(e.target.name === 'DNI') {
      //alert(`Guardando DNI: ${this.state.values.DNI}`)
    }
  }

  render () {
    const backUrl='http://localhost:3000/paciente/'

    return (
      <div>
      
        <label>Valor DNI</label>
        <input
          type="text"
          name="DNI"
          value={this.state.values.A}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        >
        </input>
        <Link to={{pathname: `/paciente/${this.state.values.DNI}`, query: {backUrl}}} >          Pincha aquí
        </Link>
      </div>
    )
  }


}


/* function Inputdni(){
  const [dni, setDNI] = useState('');
  //console.log({dni})
  
  return [
    <div>
      
        
      <form>
        <div className="btn-group-vertical">
          <input
          className="form-control"
          placeholder="Introduzca su DNI"
          pattern="[0-9]{8}[A-Z]{1}"
          title="Debe poner 8 números y una letra"
          value={dni}   
          name="" 
          onChange={e => setDNI(e.target.value.toUpperCase())} 
          type="text" 
          />
        
          <button className="mt-2 btn btn-success" >
           <a 
           className="text-light"
           style={{textDecoration: 'none'}}
           href={"paciente/" + dni}>
           Mostrar citas
           </a>
           

          </button>
        </div>
      </form>       
      
    </div>
    
    
    
];
}

export default Inputdni;
 */
{/*export default class Inputdni extends React.Component {
    state = {
    value: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.refs.textInput.value})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          className="form-control"
          placeholder="Introduzca su dni"
          pattern="[0-9]{8}[A-Z]{1}" 
          title="Debe poner 8 números y una letra mayúscula"
          type="text" ref="textInput" />
          
          <button          
          className="btn btn-success btn-lg m-2">
          OK         
          </button>
          <Link 
          className="btn btn-success btn-lg m-2"
          to={this.state.value}>
          
          MOSTRAR CITAS
          </Link>
        </form>
      </div>
    );
  }
} */}
