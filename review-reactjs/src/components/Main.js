import React from 'react'
import ReviewVariable from './sub_components/ReviewVariable'
import Prop1 from './sub_components/Prop1'
import Prop2 from './sub_components/Prop2'
import Array from './sub_components/Array'
import Class1stCom from './sub_components/Class1stCom'
import State1 from './sub_components/State1'
import State2 from './sub_components/State2'
import HandleEvent from './sub_components/HandleEvent'
import LifeCycle from './sub_components/LifeCycle'
import ConditionRendering from './sub_components/ConditionRendering'
import FetchingAPI from './sub_components/FetchingAPI'
import FormExercise from './sub_components/FormExercise'

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
                {/**Lesson 9 */}
                <LifeCycle/>
                {/**Lesson 10 */}
                <ConditionRendering/>
                {/**Lesson 11 */}
                <FetchingAPI/>
                {/**Lesson 12 */}
                <FormExercise/>
            </div>
        )
    }
}


export default Main;