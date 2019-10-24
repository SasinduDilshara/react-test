import React, { Component } from 'react'

class TodoItem extends Component {


    render() {
        const click = () => console.log("Button was clicked")
        const { id, text, completed } = this.props

        return (
            <div className="todo-item" >
                <input type="checkbox"
                    checked={completed}
                // onChange={}
                />
                <p> {text}</p>
                {/* <button onMouseOver={click}> Click</button> */}
            </div>
        );
    }



}

export default TodoItem;