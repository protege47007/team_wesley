import React, { useState } from 'react'
import Brand from './tourComps/Brand';
import Mode from './tourComps/Mode';
import Post from './tourComps/Post';




function Tours(props) {

    

    return (
        <div className="main">
            <Mode/>
            <Brand/>
            <Post/>
        </div>
    )
}

export default Tours
