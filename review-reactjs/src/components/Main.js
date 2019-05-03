import React from 'react';
import ReviewVariable from './sub_components/ReviewVariable';
import Prop1 from './sub_components/Prop1';
import Prop2 from './sub_components/Prop2';
import Array from './sub_components/Array';

function Main(){
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
        </div>
    )
}

export default Main;