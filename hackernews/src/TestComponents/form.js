import React, { Component } from 'react';
import './App.css';
// import Conditional from "./Conditional"

class Test extends Component {

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
            <div>
                <form>
                    <input name='fname' value={this.state.fname} type="text" placeholder="FirstName" onChange={this.change}></input>
                    <h1>{this.state.fname}</h1>
                    <input name="lname" value={this.state.lname} type="text" placeholder="LastName" onChange={this.change}></input>
                    <h1>{this.state.lname}</h1>

                    <textarea
                        name='textarea'
                        value={this.state.favcolor}
                        onChange={this.change}
                    />
                    <label>
                        <input
                            type="checkbox"
                            name="friend1"
                            checked={this.state.isFriend}
                            onChange={this.change}
                        /> IsFriend
                        <input
                            type="checkbox"
                            name="friend2"
                            checked={this.state.isFriend}
                            onChange={this.change}
                        /> IsFriend
                        <input
                            type="checkbox"
                            name="friend3"
                            checked={this.state.isFriend}
                            onChange={this.change}
                        /> IsFriend
                </label>


                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="FeMale"
                            checked={this.state.gender == "FeMale"}
                            onChange={this.change}
                        /> Male
                </label>


                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender == "Male"}
                            onChange={this.change}
                        /> Female
                </label>

                    <div>
                        <select
                            value={this.state.favcolor}
                            name="favcolor"
                            onChange={this.change}

                        >


                            <option value="blue">
                                blue
                        </option>
                            <option value="red">
                                red
                        </option>
                            <option value="black">
                                black
                        </option>
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default Test;

