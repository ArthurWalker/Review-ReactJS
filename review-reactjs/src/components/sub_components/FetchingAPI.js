import React from 'react'

class FetchingAPI extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:false,
            character: {}
        }
    }


    componentDidMount(){
        this.setState({loading:true})
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => this.setState({character:data,loading:false}))
    }

    render(){
        return(<div>
            {this.state.loading===false?this.state.character.name:<h1>Loading</h1>}
        </div>)
    }
}

export default FetchingAPI



