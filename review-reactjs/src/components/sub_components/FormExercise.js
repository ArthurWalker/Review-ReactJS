import React from 'react'

class FormExercise extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName:'',
            lastName:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            // This will update all input box with the name that matches with state variable
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(<div>
            <form>
                <input name='firstName' type='text' value={this.state.firstName} placeholder='First Name' onChange={this.handleChange}/>
                <input name='lastName' type='text' value={this.state.lastName} placeholder='Last Name' onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        </div>)
    }

}

export default FormExercise