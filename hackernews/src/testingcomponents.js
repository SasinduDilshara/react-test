import React, { Component } from 'react';
import './App.css';
import TodoFinal from "./todo_components/final.js"
// import Joke from "./JokeComponents/Joke"
// import Jokedata from "./JokeComponents/jokedata.js"

class Test extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // this.setState({ count: 1 })
        this.setState((previousstate) => {
            return {
                count: previousstate.count + 1
            }

        })
    }

    render() {

        return (
            // <div>
            //   <TodoFinal>

            //   </TodoFinal>
            // </div>

            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change</button>
            </div>



        );
    }
}


export default Test;


