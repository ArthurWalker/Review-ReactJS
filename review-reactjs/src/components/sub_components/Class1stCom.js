import React from 'react'

// Function components are simple and easy to understand but they have limited features compared to Class based components

// Class components allow us to implement state and life cycle
class Class1stCom extends React.Component{

    //For class base component, passing 'Props' is a bit different from function components


    // Class methods if you are familiar with Class
    yourMethod(){}
    // Inside the render if you want to use something belong to the class, use 'this' word

    render(){
        // Example of using class method inside render
        this.yourMethod()

        // Any time you want to display logic things, do that before return function

        const date = new Date()
        const time = date.getHours

        return(
            <div>
                <h1>Class Component</h1>
                {time}
                {/**Using this.props.whatever to use props inside class */}
            </div>
        )
    }
}

export default Class1stCom