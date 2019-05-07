import React from 'react'
import TodoItem from './TodoItem'
import todoData from './../data/todoData'

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            todo:todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    changeState(prevState,id){
        const updatedTodo = prevState.todo.map(todo =>{
            if (todo.id === id){
                todo.complete = !todo.complete
            }
            return todo
        })
        return {
            todo:updatedTodo
        }
    }

    handleChange(id){
        this.setState(this.changeState(this.state,id))
        console.log('Changed:',id)
    }

    render(){
        const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div>{todoItems}</div>
        )
    }
}

export default Todo