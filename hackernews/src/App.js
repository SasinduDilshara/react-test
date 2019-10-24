import React, { Component } from 'react';
import './App.css';
import TodoItem from "./todo_components/Todoitem.js"

class App extends Component {

  render() {
    return (
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}


export default App;


