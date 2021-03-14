import React from 'react'
import "./Input.css"

const TextInput = ({onChange}) => {
    return (
           <input className="text-input" type="text" onChange={onChange} ></input>
    )
}

export default TextInput
