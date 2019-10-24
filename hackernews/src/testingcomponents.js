import React, { Component } from 'react';
import './App.css';
// import Conditional from "./Conditional"
// import TodoFinal from "./todo_components/final.js"
// import Joke from "./JokeComponents/Joke"
// import Jokedata from "./JokeComponents/jokedata.js"

class Test extends Component {

    constructor() {
        super()
        this.state = {
            islog: false
        }
        this.change = this.change.bind(this)
    }
    change() {
        this.setState((prev) => {
            return { islog: !prev.islog }
        }
        )

    }

    // componentDidMount() {
    //     setTimeout(() => {

    //     }, 1500)
    // }

    render() {

        return (
            <div>
                <button onClick={this.change}>{this.state.islog ? "Logout" : "Login"}</button>
                <p>{this.state.islog ? "Logout" : "Login"}</p>
            </div>
        );
    }
}


export default Test;

