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
            isLoading: false,
            character: {}
        }
    }


    componentDidMount() {
        this.setState({ isLoading: true })
        //fetch help us to get http data easily,global function, include api where we want to get the data from
        //promised value is a like future in dart
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    character: data,
                    isLoading: false
                })
            )


    }

    render() {
        return (
            <div>
                {!this.state.isLoading ? this.state.character.name : 'Loading'}
            </div>
        );
    }
}


export default Test;

