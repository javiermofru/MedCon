import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'react-bootstrap';


class Crear extends Component {

    emptyItem = {
        id: '',
        fecha:'',
        hora:'',
        llamado:'false',
        registrado: 'false',
        medico:'',
        dni: '',
        ticketTurno: 'null',
        razon: '',
        sala_consulta: '',
        nombrePaciente: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch(`http://localhost:8080/${colegiado}/crear/`, {
        method:'POST', 
        //mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(item),
    });
}

    render() {
        const {item} = this.state;
        const title = "Añadir nueva cita";

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="nombre">Nombre paciente</Label>
                        <Input type="text" name="nombrePaciente" id="nombrePaciente" value={item.nombrePaciente || ''}
                               onChange={this.handleChange} autoComplete="nombrePaciente"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">DNI</Label>
                        <Input type="text" name="dni" id="dni" value={item.dni || ''}
                               onChange={this.handleChange} autoComplete="dni"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="titulo">Especialidad</Label>
                        <Input type="text" name="especialidad" id="especialidad" value={item.razon || ''}
                               onChange={this.handleChange} autoComplete="especialidad"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tutor">Hora</Label>
                        <Input type="text" name="hora" id="hora" value={item.hora || ''}
                               onChange={this.handleChange} autoComplete="hora"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Fecha</Label>
                        <Input type="number" name="fechas" id="fecha" value={item.fecha || ''}
                               onChange={this.handleChange} autoComplete="fecha"/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Añadir cita</Button>{' '}
{/*                         <Button color="secondary" tag={Link} to="/tfgs">Cancel</Button>
 */}                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(Crear);