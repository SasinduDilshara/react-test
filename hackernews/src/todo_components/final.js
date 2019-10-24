import React, { Component } from 'react'
import TodoItem from './Todoitem';
import tododata from './tododata'
class TodoFinal extends Component {

    constructor() {
        super()
        this.state = {
            todos: tododata
        }
    }
    render() {
        // const { id, text, completed } = this.props;
        const datatodos = this.state.todos.map((jk) =>
            <TodoItem key={jk.id}

                text={jk.text}
                completed={jk.completed}
            />)
        return (

            <div>{datatodos}</div>

        )
    }


}
export default TodoFinal;