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
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {

        return (
            <div>
                {this.state.isLoading ? <h1>Loading..</h1> : <h1>OK..</h1>}
            </div>
        );
    }
}


export default Test;

function Conditional(props) {
    return (
        <div>
            {props.isLoading ? <h1>Loading..</h1> : <h1>OK..</h1>}
        </div>
    )
}
