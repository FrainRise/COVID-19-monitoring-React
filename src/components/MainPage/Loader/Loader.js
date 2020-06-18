import React from 'react'

import './Loader.css'

const Loader = () => {
    return (
        <div class="lds-ellipsis">
            <div className="ellipsis-item"></div>
            <div className="ellipsis-item"></div>
            <div className="ellipsis-item"></div>
            <div className="ellipsis-item"></div>
        </div>
    )
}

export default Loader;