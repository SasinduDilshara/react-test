import React, { Component } from 'react'

class TodoItem extends Component {


    render() {

        const { id, text, completed } = this.props
        // console.log(this.props.id)
        return (

            // alert(this.props.handle.toString)
            < div className="todo-item" >
                <input type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handle(id)}
                />
                <p> {text}</p>
                {/* <button onMouseOver={click}> Click</button> */}
            </div >
        );
    }



}

export default TodoItem;