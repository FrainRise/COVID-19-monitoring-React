import React from 'react'

import covidWallpaper from '../../../images/covid.jpg'
import styles from './Introduction.module.css'

const Introduction = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h2 className={styles.titleCovid}>COVID-19 - potentially severe acute coronavirus respiratory infection.</h2>
                    <p className={styles.descriptionCovid}>
                    It is a dangerous disease, which can occur both in the form of an acute respiratory mild viral infection 
                    and in a severe form, specific complications of which may include viral pneumonia, which entails acute 
                    respiratory distress Syndrome or respiratory failure at risk of death.
                    </p>
                </div>
                <div className={styles.row}>
                    <h2 className={styles.hashtag}>#Staysafestayhome</h2>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
