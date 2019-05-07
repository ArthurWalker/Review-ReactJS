import React from 'react'

class TodoItem extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <input type='Checkbox'/>
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem