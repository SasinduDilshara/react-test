import React, { Component } from 'react';
import './App.css';
import TodoFinal from "./todo_components/final.js";
// import Joke from "./JokeComponents/Joke"
// import Jokedata from "./JokeComponents/jokedata.js"

class App extends Component {

  constructor() {
    super()
    this.change = this.change.bind(this);

    this.state = {
      answer: "yes",
      cc: "in"
    }
  }

  change(ans) {
    switch (ans) {
      case ('yes'): this.state.cc = "in"
      case ('no'): this.state.cc = "out"
      
    }
    return this.state.cc
  }

  render() {

    return (
      <div>
        {/* {this.state.answer} */}
        <p>{this.change(this.state.answer)}</p>
      </div>
    );
  }
}


export default App;


