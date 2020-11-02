import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div>
          <form id="new-entry" onSubmit={this.props.addTodo}>
              <input type="text" id="newText" placeholder="add a todo!" value={this.props.input} onChange={this.props.onChange}/>
              <button type="submit" onSubmit={this.props.addTodo} id="submit">add a todo</button >
          </form>
      </div>
    );
  }
}

export default NewTodo;
