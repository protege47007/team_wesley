import React from 'react'
import Price from './Price'

function Heading(props) {
    return (
        <div className="tour-heading">
        <h4 className="h4 tour-title">{props.name}</h4>
        <Price price={props.price}/>
        </div>
    )
}

export default Heading
