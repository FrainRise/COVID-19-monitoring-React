import React from 'react'

import { Link } from 'react-router-dom'
import  './Introduction.css'

const Introduction = () => {
    return(
        <div className="wrapper-intro">
            <div className="container-intro">
                <div className="row">
                    <h2 className="titleCovid">COVID-19 - potentially severe acute coronavirus respiratory infection.</h2>
                </div>
                <div className="row">
                    <h2 className="hashtag">#Staysafestayhome</h2>
                </div>
            </div>
            <Link to='/covid-stat' style={{textDecoration: 'none'}}>
                <button type="button" className="btn-stat">
                    Show Chart
                </button>
            </Link>

        </div>
    )
}

export default Introduction;
