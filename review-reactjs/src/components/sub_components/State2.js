import React from 'react'
import Todo from './Todo'

class State2 extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div><Todo/></div>
        )
    }
}

export default State2