import React from 'react'
import './uniButton.style.scss'

const UniButton = ( {children, ...rest}) => (
    <button className="unibutton" {...rest}>
        {children}
    </button>
)

export default UniButton