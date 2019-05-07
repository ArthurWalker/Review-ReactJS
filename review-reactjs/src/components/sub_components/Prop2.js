import React from 'react'
import Joke from './Joke';

class Prop2 extends React.Component{
    render(){
        return(
            <div>
                <Joke 
                    // question = 'Q1'
                    answer = 'A1'
                />
                <Joke
                    question = 'Q2'
                    answer = 'A2'/>
                <Joke
                    question = 'Q3'
                    answer = 'A3'/>
                <Joke
                    question = 'Q4'
                    answer = 'A4'/>
                <Joke
                    question = 'Q5'
                    answer = 'A5'/>
            </div>
        )
    }
}


export default Prop2