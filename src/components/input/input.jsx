import React from 'react'
import './input.style.scss'

const Input = ( { handleChange, label, ...rest }) => (

    <div className="group">
        <input className="group__input"
        onChange={handleChange} {...rest} />
        
        
    
    </div>
)

export default Input