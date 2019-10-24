import React, { Component } from 'react'

class Joke extends Component {

    render() {

        const { ques, ans } = this.props
        return (
            <div>
                <h1 style={{ display: !ques && "none" }}>{ques}</h1>
                <h1 style={{ color: !ques && "#888888" }}>{ans}</h1>
            </div>
        )

    }



}

export default Joke;