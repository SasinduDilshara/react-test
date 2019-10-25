import React, { Component } from 'react'
import MemeGenerator from './MemeGenerator'
import Header from './Header'

class Final extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <MemeGenerator />
            </div>


        )
    }


}

export default Final