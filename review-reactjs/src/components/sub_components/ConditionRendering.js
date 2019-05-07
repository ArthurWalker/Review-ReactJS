import React from 'react'
import Conditional from './Conditional'

class ConditionRendering extends React.Component{

    constructor(){
        super()
        this.state = {
            // When you are making an API call and you are waiting for the result and you dont want users think your website is down
            // then use this
            isLoading:true,
            unreadMessages: ['Call your mom','New spam email available']
        }
    }

    // For now, we are faking an API delay call
    componentDidMount(){
        setTimeout(() => {this.setState({isLoading:false})},1500)
    }

    render(){
        return(
            <div>
                <Conditional isLoading={this.state.isLoading}/>
                {this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} unread messages</h2>}
            </div>
        )
    }
}

export default ConditionRendering