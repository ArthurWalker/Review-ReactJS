import React from 'react'

// State is the data that the component can maintain => It can be changed the value by the component. 
//=> It needs to be a class based component to use states
// While prop is the way the components communicate with each other so components cant change the value of prop 
//=> Prop is unchangable and do not need class based components

class State1 extends React.Component{

    //Contructor is a method that initializes parts of the class
    constructor(){
        // Call the global functions. It will go the parent classes and grap some items and bring down to our class
        // Whenever you have a constructor, add super()
        super()
        // To change the value of props, we first need to assign the prop to state. Then use this.setState() to change the 
        // value of state. By doing so, all child states inside components will change and the prop will change as well
        this.state = {
            answer:'Yes',
            age:'23',
            isLoggedIn:true
        }
    }

    render(){
        let wordDisplay
        if (this.state.isLoggedIn ===true){
            wordDisplay='in'
        }
        else{
            wordDisplay='out'
        }
        return(
            <div>
                <h1>{this.state.answer}</h1>
                <h3>{this.state.age}</h3>
                <h1>You are currently logged {wordDisplay}</h1>
                {/**When the state is changed, the prop is changed */}
                {/* <ChildComponent answer={this.state.answer}/> */}
            </div>
        )
    }
}

export default State1