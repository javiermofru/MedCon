import React, { Component } from "react";
import "../Estilo/Notes.css" ;

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="widgetLg">
        <div>
        <span className='notesTitle'>Notas</span>
          <br />
          <input
            type="text"
            className='notesInput'
            placeholder="Añade un recordatorio..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button   className='notesButton' onClick={() => this.addItem()}>Añadir</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Notes;