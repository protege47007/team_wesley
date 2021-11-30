import React from 'react'
import Footer from './Footer'
import Heading from './Heading'
import Info from './Info'
import Preview from './Preview'

function Post(props) {
    return (
        <div className="single-tour">
            <Preview image={props.image}/>
            <div className="info">
            <Heading name={props.name} price={props.price}/>
            <Info text={props.info}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Post
