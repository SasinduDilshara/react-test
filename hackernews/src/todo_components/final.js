import React, { Component } from 'react'
import TodoItem from './Todoitem';
import tododata from './tododata'
class TodoFinal extends Component {


    render() {
        // const { id, text, completed } = this.props;
        const jokes = tododata.map((jk) =>
            <TodoItem key={jk.id}

                text={jk.text}
                completed={jk.completed}
            />)
        return (

            <div>{jokes}</div>

        )
    }


}
export default TodoFinal;