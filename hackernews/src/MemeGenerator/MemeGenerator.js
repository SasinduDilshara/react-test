import React, { Component } from 'react'

class MemeGenerator extends Component {


    constructor() {
        super()
        this.state = {
            top: '',
            bottom: '',
            randomimg: "data:image/jpeg;base64,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",
            allimgs: []
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json()
                .then(response => {
                    const { memes } = response.data
                    console.log(memes[0])
                    this.setState({ allimgs: memes })

                }))
    }

    change(event) {
        const { name, value, type, checked } = event.target
        this.setState(
            { [name]: value }
        )

    }

    submit(event) {
        event.preventDefault()
        const random = Math.floor(Math.random() * this.state.allimgs.length)
        const img_ = this.state.allimgs[random].url
        // const { name, value, type, checked } = event.target
        this.setState({ randomimg: img_ }
        )

    }

    render() {

        return (

            <form onSubmit={this.submit}>
                <input type="text" onChange={this.change} value={this.state.top} name="top" placeholder="Top Text" />
                <input type="text" onChange={this.change} value={this.state.bottom} name="bottom" placeholder="Bottom Text" />
                <button
                // onClick={this.submit}
                > Generator</button>
                <div>
                    <img src={this.state.randomimg} />
                    <h2>{this.state.top}</h2>
                    <h2>{this.state.bottom}</h2>
                </div>
            </form>

        )
    }


}

export default MemeGenerator