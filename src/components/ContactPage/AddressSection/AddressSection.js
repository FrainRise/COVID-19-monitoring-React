import React from 'react'

import map from '../../../assets/images/address-icons/map.png'

import './AddressSection.css'

const addresCreds = [
    {id: 1, name: '', image: '', alt: ''},
    {id: 1, name: '', image: '', alt: ''},
    {id: 1, name: '', image: '', alt: ''}
]

const AddressSection = () => {
    return (
        <div className="map-container">
            <h2 className="local-title"> Our location </h2>
            <div className="local-address">
                                
            </div>
            <div className="map-block">
            <img src={map} alt="map" className="map-image"/>
            </div>
        </div>
    )
}

export default AddressSection;