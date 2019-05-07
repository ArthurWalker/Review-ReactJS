import React from 'react'
import Todo from './Todo'
// Link to see all events supported by React

//https://reactjs.org/docs/events.html

class HandleEvent extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    increaseBy(prevState){
        return {count:prevState+1}
    }

    handleClick(){
        // Initial state
        // Whenever you want to create a class method which uses this.setState then you must bind the method
        //this.setState({count: 1})
        // Another way to change the state
        this.setState(this.increaseBy(this.state.count))
        console.log('I was clicked')
    }

    handleMouseOver(){
        console.log('I was hovered')
    }

    render(){
        return(
            <div>
                <img onMouseOver={this.handleMouseOver} src='https://www.w3schools.com/w3css/img_lights.jpg'/>
                <br/><br/>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change</button>
                <br/>
                <Todo/>
            </div>
        )
    }
}

export default HandleEvent