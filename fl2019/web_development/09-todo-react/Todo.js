import React, { Component } from 'react';
import './Todo.css';

var key = "0b072c-53f35c-d2747f-400e18-9e7489";
var api = "https://cse204.work/todos";

class Todo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          completed: this.props.completed
      }
      this.completeTodo = this.completeTodo.bind(this);
  }
  completeTodo(event) {
      var todoId = event.target.parentNode.id;
      var self= this;
      var data = {
          completed: true
      };
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
          // Wait for readyState = 4 & 200 response
          if (this.readyState === 4 && this.status === 200) {
              // parse JSON response
              self.setState({
                  completed: true
              });

          } else if (this.readyState === 4) {
              // this.status !== 200, error from server
              console.log(this.responseText);
          }
      };

      xhttp.open("PUT", api + "/" + todoId, true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("x-api-key", key);
      xhttp.send(JSON.stringify(data));
  }

  render() {
    var className = "todo";
    if (this.state.completed) {
      className = "todo completed";
    }
    return (
      <div id={this.props.id} className={className}>
       <button id="chek" className="check" onClick={this.completeTodo}>&#10004;</button>
       <p>{this.props.text}</p>
       <button id="delet" className="delete" onClick={this.props.deleteTodo}>-</button>
     </div>
    );
  }
}

export default Todo;
