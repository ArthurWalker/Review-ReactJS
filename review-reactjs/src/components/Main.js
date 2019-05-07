import React from 'react'
import ReviewVariable from './sub_components/ReviewVariable'
import Prop1 from './sub_components/Prop1'
import Prop2 from './sub_components/Prop2'
import Array from './sub_components/Array'
import Class1stCom from './sub_components/Class1stCom'
import State1 from './sub_components/State1'
import State2 from './sub_components/State2'
import HandleEvent from './sub_components/HandleEvent'

class Main extends React.Component{
    render(){
        return (
            <div>
                {/**Lesson 1 */}
                <ReviewVariable/>
                {/**Lesson 2 */}
                <Prop1/>
                {/**Lesson 3 */}
                <Prop2/>
                {/**Lesson 4 */}
                <Array/>
                {/**Lesson 5 */}
                <Class1stCom/>
                {/**Lesson 6 */}
                <State1/>
                {/**Lesson 7 */}
                <State2/>
                {/**Lesson 8 */}
                <HandleEvent/>
            </div>
        )
    }
}


export default Main;