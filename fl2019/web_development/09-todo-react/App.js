import React, {Component} from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

var key = "0b072c-53f35c-d2747f-400e18-9e7489";
var api = "https://cse204.work/todos";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        }
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.sortTodo = this.sortTodo.bind(this);
    }

    addTodo(event) {
      var self = this;
      event.preventDefault();
      var data = {
        text: this.state.input
      }
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        // Wait for readyState = 4 & 200 response
        if (this.readyState === 4 && this.status === 200) {
          // parse JSON response
          self.setState({
            todos: [...self.state.todos, JSON.parse(this.responseText)]
          });
        } else if (this.readyState === 4) {
          console.log(this.responseText);
        }
      };
    xhttp.open("POST", api, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", key);
    xhttp.send(JSON.stringify(data));

    this.setState({
        input: ''
      });
    }

    onChange(event) {
      this.setState({
          input: event.target.value
      });
    }
    deleteTodo(event) {
      var todoId = event.target.parentNode.id;
      var self = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          // parse JSON response
          // event.target.parentNode.remove();
          const otherTodos = self.state.todos.filter((todo) => {
            // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
            if (todo.id !== todoId) {
              return todo;
            }
          });
        self.setState({
          todos: otherTodos
          });
        } else if (this.readyState === 4) {
          console.log(this.responseText);
        }
      };
      xhttp.open("DELETE", api + "/" + todoId, true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("x-api-key", key);
      //send complete changes
      xhttp.send();
  }

    sortTodo(event) { //sorting in a through z order. when page is reloaded, goes back to default
      console.log("sorting");
      var todos = this.state.todos;

      todos.sort(function (a, b) {
        return a.text.localeCompare(b.text); //localeCompare returns number indicating whether string comes before, after, or is equal for sorting
      })
      this.setState({todos: todos});
    }

    render() {
      return (
        <section id = "todos">
          <div id="title">My ToDo List</div>
          <NewTodo addTodo = {this.addTodo} onChange = {this.onChange} updateTodo = {this.updateTodo} input = {this.state.input}/>
          <button onClick = {this.sortTodo} id="submit">sort: a-z</button>
          <hr id="line"></hr>
          {this.state.todos.map((todo) =>
            <Todo key = {todo.id} id = {todo.id} completed = {todo.completed} text = {todo.text} deleteTodo = {this.deleteTodo}/>)
            }
        </section>);
      }

    componentDidMount() {
      const self = this;
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          var todos = JSON.parse(xhttp.responseText);
          self.setState({todos: todos});
          console.log(todos);
        }
      };

      xhttp.open("GET", api, true);
      xhttp.setRequestHeader("x-api-key", key);
      xhttp.send();
    }
  }

export default App;
