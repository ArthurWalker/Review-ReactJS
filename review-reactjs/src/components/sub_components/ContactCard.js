import React from 'react'
// Props is an object that has properties. Each property is a prop you pass in

class ContactCard extends React.Component{
    render(){
        //console.log(props)
        return(
            <div className='contact-card'>
                {/** First way of using prop from previous way in Header
                    {props.name}
                    <img src = {props.imgUrl} style={{height:'50px',width:'50px'}}/>
                */}
                {this.props.contact.name}
                <img src = {this.props.contact.imgUrl} style={{height:'50px',width:'50px'}}/>
            </div>
        )
    }
}

export default ContactCard