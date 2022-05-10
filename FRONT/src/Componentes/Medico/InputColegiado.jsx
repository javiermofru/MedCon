import React from "react";
import "../../Assets/Paciente/Login.css";
import {Link} from 'react-router-dom'


export default function compruebaPassword(numero,pass) {
  const [medicos, setMedicos] = useState([]);
  const [encontrado, setEncontrado] = useState("false");
  const [comprobado, setComprobado] = useState("false");

  useEffect(() => {
    fetch(`http://localhost:8080/medico`)
    .then((response) => response.json())
    .then((response) => setMedicos(response));
  })

  medicos.map((data,index) => (
    data.colegiado = (numero ? setEncontrado("true") : "")
    ((encontrado = "true") && (data.contraseña=pass)) ? setComprobado("true") : "" 
  ))


  return (
    comprobado ? "true" : "false"
  )


}

export default class Inputdni extends React.Component {
    state = {
    values: {
      colegiado: '',
      pass: '',
      comprobado: 'false'
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
    if(e.target.name === 'colegiado') {
      //alert(`Guardando DNI: ${this.state.values.DNI}`)
    }
  }



  render() {
    const backUrl='http://localhost:3000/medico/'

    return (
      <div>
        <form>
          <input 

          id='input'
          className="form-control"
          type="text"
          name="colegiado"
          placeholder="Introduzca su Nº de colegiado"
          pattern="[0-9]{9}"
          title="Debe poner 9 números"
          value={this.state.values.colegiado}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        >
        </input>
        <input
          name="pass"
          className="form-control mt-2"
          placeholder="Introduzca su contraseña"
          type="password"
          value={this.state.values.pass}
          onChange={this.handleChange}
          
          />   
          <Link 
          className="btn btn-success mt-2"
/*           onClick={() => this.state.values.comprobado.setState(
              (compruebaPassword(this.state.values.colegiado,this.state.values.pass)="true") ? "true" : "false"
            )
          }
 */

/*           to={this.state.values.comprobado="true" ? {pathname: `/medico/${this.state.values.colegiado}`, query: {backUrl}} : {pathname: `/medico`, query: {backUrl}}}           
 */          
          //to={pathname: `/medico/${this.state.values.colegiado}`, query: {backUrl}}
          >        
          Ver mis citas
        </Link>
   
          
        </form>
      </div>
    );
  }
}
