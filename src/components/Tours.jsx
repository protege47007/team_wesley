import React, { useState } from 'react'
import Brand from './tourComps/Brand';
import Mode from './tourComps/Mode';
import Post from './tourComps/Post';




function Tours(props) {
    const posts = props.data.map((datum, id)=>(
        <Post {...datum} key={id}/>
    ));
    

    return (
        <div className="section">
            <Mode/>
            <Brand/>
            {posts}
        </div>
    )
}

export default Tours
