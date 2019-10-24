import React, { Component } from 'react'

class TodoItem extends Component {


    render() {
        const { id, text, completed } = this.props

        return (
            <div className="todo-item" >
                <input type="checkbox"
                // checked={completed}
                />
                <p> {text}</p>
            </div>
        );
    }



}

export default TodoItem;