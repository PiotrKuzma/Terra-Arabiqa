import React from 'react'

import './directory-item.scss'

const DirectoryItem = ({ title, imageUrl }) => (
    
    <div style= {{
        backgroundImage: `url(${imageUrl})`
    }} className="directory__item">
        <div className="directory__item__content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">Zobacz</span>
        </div>
    </div>


)

export default DirectoryItem