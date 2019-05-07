import React from 'react'

// Article explains about lifecycle: https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

class LifeCycle extends React.Component{

    constructor(){
        super()
        this.state = {}
    }

    // - Rare case like when your component needs to take incoming props as receiving from parents and sets its own states based on these props
    // - Not encourage to use this method
    static getDerivedStateFromProps(props,state){
        // return the new, updated states based upon the props
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
        return
    }

    // Create a backup of the current way things are => Store objects with many points in them
    // Not common to use
    getSnapshotBeforeUpdate(){
        return
    }

    // This component is removed or replicated
    //componentWillMount(){}

    // - Something like you were just born => The component did just mount to the screen
    // - The very first time the component shows up, React will run componentDidMount method
    // - This method only runs once while the component shows up on the screen. ComponentDidMount will not change
    // even re-render because the component just did not unmount or remount
    // - The main usage of this method is to do API calls, to get data from external sources
    componentDidMount(){
        return
    }

    // - When someone gives you a gift. The component receives props from its parent components.
    // - Every time, the component receives props, it will run this method
    // - It will not only run the very first time the component is mounted, it also runs every time a parent component
    // decides to hand props to child component. 
    // E.x: the parent component wants to change props that are passing down to child components, one thing we 
    // can do in this method of child component is to check if the new receiving prop is different from existing prop. If they
    // are not then we wont do anything but if not, then users can decide to run changing states methods, etc
    // - But from React 17, this method wont mean anything special (dont need to use)
    // componentWillReceiveProps(nextProps){
    //     if (nextProps.whatever !== this.props.whatever){
    //         // do sth
    //     }
    // }

    // - When you need to make a decision to change your cloth or not
    // - If React has any question like if the component needs to re-render
    shouldComponentUpdate(nextProps,nextState){
        // return True if we want to update 
        // otherwise
        return
    }

    // This component is removed or replicated
    // componentWillUpdate(){}

    // - In real life, everything will come to an end => Componetn will unmount or disappear all together from the screen
    // - The main usage is to clean up or teardown everything you set up that potentially cluter in the DOM or app
    // - Another common used case is to if the componentDidMount set up an event listener then you will remove that event in here
    componentWillUnmount(){
        return
    }


    // - Its job to detemine exactly what gets rendered to the screen which means how components are displayed to the world
    // - Render can be called many times. Any time React determines sth changed like states or props which effect how the components
    // is going to display, React will run render once again
    render(){
        return(<div></div>)
    }
}

export default LifeCycle