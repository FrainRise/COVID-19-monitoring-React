import React from 'react'

import './LinksSection.css'

const LinksSection = () => {
    return (
        <div className="links-container">
            <h2 className="links-title">
                If you think you are sick, you can take the online test for COVID-19 using the links below
            </h2>
            <div className="links-list">
                <a href="https://covid-19.ontario.ca/self-assessment/" className="test-link link-lined"> Ontario Test </a>
                <a href="https://poboremo.org/online-test-covid19" className="test-link link-lined"> Poboremo Test </a>
                <a href="https://ifpnews.com/coronavirus-online-test" className="test-link link-lined"> IfpNews Test </a>
            </div>
        </div>
    )
}

export default LinksSection;