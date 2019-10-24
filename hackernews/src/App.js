import React, { Component } from 'react';
import './App.css';
import TodoFinal from "./todo_components/final.js"
// import Joke from "./JokeComponents/Joke"
// import Jokedata from "./JokeComponents/jokedata.js"
import Test from './testingcomponents'
class App extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick

  render() {

    return (
      // <div>
      //   <TodoFinal>

      //   </TodoFinal>
      // </div>

      <div>
        <Test />
      </div>



    );
  }
}


export default App;


