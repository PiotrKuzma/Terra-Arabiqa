import React from 'react'
import { withRouter } from 'react-router-dom'
import './directory-item.style.scss'

const DirectoryItem = ({ title, imageUrl, history, match, linkUrl }) => (

    <div style= {{
        backgroundImage: `url(${imageUrl})`
    }} className="directory__item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="directory__item__content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">Zobacz</span>
        </div>
    </div>

)

export default withRouter(DirectoryItem)