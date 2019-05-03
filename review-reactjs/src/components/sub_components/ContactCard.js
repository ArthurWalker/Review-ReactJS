import React from 'react'

// Props is an object that has properties. Each property is a prop you pass in
function ContactCard(props){
    //console.log(props)
    return(
        <div className='contact-card'>
            {/** First way of using prop from previous way in Header
                {props.name}
                <img src = {props.imgUrl} style={{height:'50px',width:'50px'}}/>
            */}
            {props.contact.name}
            <img src = {props.contact.imgUrl} style={{height:'50px',width:'50px'}}/>
        </div>
    )
}

export default ContactCard