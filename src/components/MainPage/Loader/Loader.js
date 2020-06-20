import React from 'react'

import './Loader.css'

const Loader = () => {
    return (
        <div className="lds-ellipsis">
            <div className="ellipsis-item"></div>
            <div className="ellipsis-item"></div>
            <div className="ellipsis-item"></div>
            <div className="ellipsis-item"></div>
        </div>
    )
}

export default Loader;