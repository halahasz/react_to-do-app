import React, { Component } from "react";
import AddToDo from "../components/AddToDo";
import axios from "axios";
import ToDos from "../components/ToDos";

const url = "https://jsonplaceholder.typicode.com/todos";
class Home extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios
      .get(`${url}?_limit=5`)
      .then(res => this.setState({ todos: res.data }))
      .catch(err => console.log(err));
  }
  addItem = e => {
    e.preventDefault();
    const newItem = {
      title: e.target[0].value,
      completed: false
    };
    axios
      .post(url, newItem)
      .then(res =>
        this.setState(prevState => ({ todos: [...prevState.todos, res.data] }))
      )
      .catch(err => console.log(err));
    e.target.reset();
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleDel = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    return (
      <>
        <AddToDo submitFn={this.addItem} />
        <ToDos
          todos={this.state.todos}
          markFn={this.markComplete}
          delFn={this.handleDel}
        />
      </>
    );
  }
}

export default Home;


