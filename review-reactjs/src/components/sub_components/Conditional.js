import React from 'react'

class Conditional extends React.Component{
    render(){
        // condition ? statement if true : statement if false
        return (<div>
            {this.props.isLoading===true ? <h1>Loading</h1> : <h1>Cool stuffs about conditional rendering</h1>}
        </div>)
    }
}

export default Conditional