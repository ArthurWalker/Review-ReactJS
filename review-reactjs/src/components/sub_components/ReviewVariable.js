import React from 'react';
import './../../css/main.css'

class DecideTime extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay 
        if (hours < 12){
            timeOfDay = 'morning'
        }
        else if (hours > 12 && hours < 17){
            timeOfDay = 'afternoon'
        }
        else {
            timeOfDay =' evening'
        }
        return (
            <h4 style={{backgroundColor:'red'}}>Good {timeOfDay} !</h4>
        ) 
    }
}


class ReviewVariable extends React.Component{
    render(){
        const firstName ='Pham'
        const lastName='Phuc'

        const style2 = {
            // Instead of background-color in css, we must convert '-' to the capital letter of the letter behind '-' in React
            backgroundColor:'blue',
        }
    
        return (
            <main className='ReviewVariable'>
                <h3 style={style2}>This is Main component</h3>
                <h4>Hello {firstName +" "+ lastName} !</h4>
                <DecideTime/>
            </main>
        );
    
    }
}


export default ReviewVariable;