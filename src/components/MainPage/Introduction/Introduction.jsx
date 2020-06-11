import React from 'react'

import styles from './Introduction.module.css'

const Introduction = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h2 className={styles.titleCovid}>COVID-19 - potentially severe acute coronavirus respiratory infection.</h2>
                </div>
                <div className={styles.row}>
                    <h2 className={styles.hashtag}>#Staysafestayhome</h2>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
