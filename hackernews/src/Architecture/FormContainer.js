import React, { Component } from 'react';
// import './App.css';
import FormComponent from "./FormComponent"

class Form extends Component {

    constructor() {
        super()
        this.state = {
            fname: "",
            lname: "",
            friend1: false,
            friend2: false,
            friend3: false,
            gender: "",
            favcolor: ""
        }
        this.change = this.change.bind(this)
    }

    change(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

    }


    render() {
        return (
            <FormComponent
                change={this.change}
                data = {this.state}
            />
        )
    }
}

export default Form;