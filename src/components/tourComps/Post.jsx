import React from 'react'
import Footer from './Footer'
import Heading from './Heading'
import Preview from './Preview'

function Post(props) {
    return (
        <div className="single-tour">
            <Preview image/>
            <Heading name price/>
            <Footer/>
        </div>
    )
}

export default Post
