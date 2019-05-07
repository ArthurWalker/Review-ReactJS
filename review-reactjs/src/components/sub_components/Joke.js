import React from 'react'

class Joke extends React.Component{
    render(){
        return (
            <div style={{backgroundColor:this.props.backgroundColor}}>
                {/**If the prop.question exists then return block else nothing is showing for style display from Prop2*/}
                <h3 style={{display: this.props.question ? 'block':'none'}}>Question: {this.props.question}</h3>
                <h3 style={{color: this.props.question ? 'pink':'red'}}>Answer: {this.props.answer}</h3>
                <hr/>
            </div>)
    }
}


export default Joke