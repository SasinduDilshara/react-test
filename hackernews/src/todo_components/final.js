import React, { Component } from 'react'
import TodoItem from './Todoitem';
import tododata from './tododata'
class TodoFinal extends Component {

    constructor() {
        super()
        this.state = {
            todos: tododata
        }
        this.handle = this.handle.bind(this)
    }

    handle(id) {
        this.setState(pre => {
            // console.log(id)
            const newtodo = pre.todos.map(
                todo => {
                    if (todo.id == id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            return { todos: newtodo }



        })
    }


    render() {
        // const { id, text, completed } = this.props;
        const datatodos = this.state.todos.map((jk) =>

            < TodoItem key={jk.id}
                handle={this.handle}
                id={jk.id}
                text={jk.text}
                completed={jk.completed}
            />)
        return (

            <div>{datatodos}</div>

        )
    }


}
export default TodoFinal;