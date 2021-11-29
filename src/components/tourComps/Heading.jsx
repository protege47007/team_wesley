import React from 'react'
import Price from './Price'

function Heading(props) {
    return (
        <>
        <h4 className="h4">{props.name}</h4>
        <Price price={props.price}/>
        </>
    )
}

export default Heading
