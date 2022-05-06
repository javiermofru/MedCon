import React, { Component } from 'react';

import { render } from 'react-dom';
import '../App.css';
   

class Hora extends Component {

  state = {
    curTime: ""
  };
 
  componentDidMount() {
    this.getTime();
  }
 
  getTime = () => {
    var today = new Date(),
 
    curTime = today.getHours() + ':' + today.getMinutes();
 
 
    this.setState({ curTime });
  };
 
  render(){
    return (
      <div className="Hora">
        <p>{this.state.curTime}</p>
      </div>
    );
  }

}
export default Hora;