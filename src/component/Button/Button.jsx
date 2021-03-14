import React from 'react'
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ label, type, onClick}) => {
    type = type ? type : "primary"

    return (
        <button className={"uinator-button " + type} onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button