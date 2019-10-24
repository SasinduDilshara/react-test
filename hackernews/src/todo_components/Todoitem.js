import React, { Component } from 'react'

class TodoItem extends Component {



    render() {
        const completeStyle =
        {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        const { id, text, completed } = this.props

        return (


            < div className="todo-item" >
                <input type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handle(id)}
                />
                <p style={completed ? completeStyle : null}> {text}</p>

            </div >
        );
    }



}

export default TodoItem;