import React, { Component } from 'react';
import './App.css';
// import Conditional from "./Conditional"

class Test extends Component {

    constructor() {
        super()
        this.state = {
            fname: "",
            lname: "",
            isFriend: true
        }
        this.change = this.change.bind(this)
    }

    change(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })

    }


    render() {
        return (
            <div>
                <form>
                    <input name='fname' value={this.state.fname} type="text" placeholder="FirstName" onChange={this.change}></input>
                    <h1>{this.state.fname}</h1>
                    <input name="lname" value={this.state.lname} type="text" placeholder="LastName" onChange={this.change}></input>
                    <h1>{this.state.lname}</h1>
                </form>
                <textarea value={"Default"} />
                <input

                    type="checkbox"
                    name="isFriend"
                    checked={this.state.isFriend}
                    onChange={this.change}
                >isFriend </input>
            </div>
        );
    }
}


export default Test;

