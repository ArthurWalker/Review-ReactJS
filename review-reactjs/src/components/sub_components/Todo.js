import React from 'react'
import TodoItem from './TodoItem'
import todoData from './../data/todoData'

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            todo:todoData
        }
    }

    render(){
        const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item}/>)
        return(
            <div>{todoItems}</div>
        )
    }
}

export default Todo