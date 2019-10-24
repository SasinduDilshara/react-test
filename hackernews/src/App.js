import React, { Component } from 'react';
import './App.css';
// import TodoItem from "./todo_components/Todoitem.js"
import Joke from "./JokeComponents/Joke"
import JokeData from "./JokeComponents/jokedata.js"
class App extends Component {

  render() {
    const jokes = JokeData.map((jk) =>
      <Joke
        ques={jk.ques}
        ans={jk.ans}
      />
    )
    return (
      <div>
        {jokes}
      </div>


    );
  }
}


export default App;


