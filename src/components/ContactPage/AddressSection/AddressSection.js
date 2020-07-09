import React from 'react'

import map from '../../../assets/images/address-icons/map.png'
import address from '../../../assets/images/address-icons/address.png'
import mail from '../../../assets/images/address-icons/mail.png'
import phone from '../../../assets/images/address-icons/phone.png'

import './AddressSection.css'

const addresCreds = [
    {id: 1, name: 'Address', image: address, alt: 'Address', description: 'Erevanskiy 4/35, Slavutych, UA'},
    {id: 2, name: 'Mail', image: mail, alt: 'Mail', description: 'risen-risen@gmail.com, cov-10-mon@gmail.com'},
    {id: 3, name: 'Phone', image: phone, alt: 'Phone', description: '+380678765656, +790234456776'}
]

const AddressSection = () => {
    return (
        <div className="address-container">
            <h2 className="local-title"> Our location </h2>
            <div className="location-wrapper">
                <div className="local-address">
                    {addresCreds.map((address) => {
                        return (
                            <div className="address-wrapper" key={address.id}>
                                <img src={address.image} alt={address.alt} className="address-icon"/>
                                <h2 className="address-title">{address.name}</h2>
                                <p className="address-descr">{address.description}</p>
                            </div>
                        )
                    })}           
                </div>
                <div className="map-block">
                    <img src={map} alt="map" className="map-image"/>
                </div>
            </div>
        </div>
    )
}

export default AddressSection;