import React from 'react'

import './RulesSection.css'
import washHands from '../../../assets/images/rules-section/wash-hands.png'
import disInfect from '../../../assets/images/rules-section/disinfectant.png'
import sneezeHands from '../../../assets/images/rules-section/sneeze-hands.png'
import socDistance from '../../../assets/images/rules-section/social-distance.png'
import pandFlu from '../../../assets/images/rules-section/pandemic-flu.png'

const rulesArray = [
    {id: 1, image: washHands, description: 'Wash your hands often with soap and water for at least 20 seconds.', alt: 'wash hands'},
    {id: 2, image: disInfect, description: 'Clean and disinfect surfaces around your home and work frequently.', alt: 'disinfect'},
    {id: 3, image: sneezeHands, description: 'Sneeze or cough?  Cover your nose and mouth with a tissue or use your elbow.', alt: 'sneeze hands'},
    {id: 4, image: socDistance, description: 'Keep at least 6 feet between yourself and others if you must be in public.', alt: 'social distance '},
    {id: 5, image: pandFlu, description: 'Wear a cloth face covering over your mouth and nose when around others. ', alt: 'pandemic flu'},
]

const RulesSection = () => {
    return (
        <div className="rules-container">
            <h2 className="rules-title">How to prevent the spread of COVID-19 </h2>
            <div className="rules-list">
                {
                    rulesArray.map((item) => {
                        return (
                            <div className="custom-row" key={item.id}>
                                <div className="wrapper">
                                    <img className="rule-image" src={item.image} alt={item.alt} />
                                    <p className="rule-description">
                                        {item.description}
                                    </p>
                                </div>
                             </div>
                        )
                    })   
                }
            </div>
        </div>
    )
}

export default RulesSection;