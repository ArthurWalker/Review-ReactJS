import React from 'react'
import JokeData from './../data/JokeData'
import Joke from './Joke'

class Array extends React.Component{
    render(){
    // const nums = [1,2,3,4,5,6,7,8,9,10]
    // const double = nums.map(function(num){
    //     return num*2
    // })
    // console.log(double)

    const jokeComponents = JokeData.map((joke) =>{
        return (<div style={{backgroundColor:'green'}}>
            <Joke key={joke.id} question={joke.question} answer={joke.answer}/>
        </div>)})

    return(<div>
        {jokeComponents}
    </div>)
    }
}

// function Array(){

// }


export default Array