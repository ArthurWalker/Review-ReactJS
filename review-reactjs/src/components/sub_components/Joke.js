import React from 'react'

function Joke(props){
    return (
    <div>
        {/**If the prop.question exists then return block else nothing is showing for style display from Prop2*/}
        <h3 style={{display: props.question ? 'block':'none'}}>Question: {props.question}</h3>
        <h3 style={{color: props.question ? 'pink':'red'}}>Answer: {props.answer}</h3>
        <hr/>
    </div>)
}

export default Joke