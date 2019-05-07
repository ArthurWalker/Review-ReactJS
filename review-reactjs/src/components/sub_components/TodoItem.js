import React from 'react'

class TodoItem extends React.Component{
    render(){
        const completedStyle ={
            fontStyle:'italic',
            color:'gray',
            textDecoration:'line-through'
        }

        return(
            <div>
                <input type='checkbox' checked = {this.props.item.complete} 
                onChange={() =>  this.props.handleChange(this.props.item.id)}/>
                <p style={this.props.item.complete ? completedStyle:null}>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem