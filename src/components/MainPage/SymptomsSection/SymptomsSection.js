import React from 'react'

import './SymptomsSection.css'
import fever from '../../../assets/images/symptoms/fever.png'
import cough from '../../../assets/images/symptoms/cough.png'
import tiredness from '../../../assets/images/symptoms/tired.png'
import asthma from '../../../assets/images/symptoms/asthma.png'
import headache from '../../../assets/images/symptoms/headache.png'
import soreThroat from '../../../assets/images/symptoms/sore-throat.png'

const mainSymptoms = [
    {id: 1, name: 'Fever', image: fever, alt: 'fever icon'},
    {id: 2, name: 'Cough', image: cough, alt: 'cough icon'},
    {id: 3, name: 'Tiredness', image: tiredness, alt: 'tiredness icon'}
];

const additionalSymptoms = [
    {id: 1, name: 'Asthma', image: asthma, alt: 'asthma icon'},
    {id: 2, name: 'Sore throat', image: soreThroat, alt: 'sore throat icon'},
    {id: 3, name: 'Headache', image: headache, alt: 'headache icon'}
];

const SymptomsSection = () => {
    return (
        <div className="symptoms-container">
            <h2 className="symptoms-title"> What is the main symptoms of COVID-19? </h2>
            <div className="cont-symptoms">
                {
                    mainSymptoms.map((symptom) => {
                        return (
                            <div className="info-container" key={symptom.id}>
                                <h4 className="symp-title">{symptom.name}</h4>
                                <img src={symptom.image} alt={symptom.alt} className="symp-icon"/>
                            </div>
                        )
                    })
                }
            </div>
            <h2 className="add-symp-title">Additional symptoms of COVID-19</h2>
            <div className="cont-symptoms">
            {
                additionalSymptoms.map((symptom) => {
                        return (
                            <div className="info-container" key={symptom.id}>
                                <h4 className="symp-title">{symptom.name}</h4>
                                <img src={symptom.image} alt={symptom.alt} className="symp-icon"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SymptomsSection;