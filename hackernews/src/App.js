import React, { Component } from 'react';
import './App.css';
import TodoFinal from "./todo_components/final.js";
// import Joke from "./JokeComponents/Joke"
// import Jokedata from "./JokeComponents/jokedata.js"

class App extends Component {

  constructor() {
    super()
    this.state = {
      answer: "yes"
    }
  }

  render() {

    return (
      <div>
        {this.state.answer}
      </div>
    );
  }
}


export default App;


