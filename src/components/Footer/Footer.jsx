import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.footerCopyright}> Copyright © 2020 by Andrew Kovalenko. All rights reserved </h2>
        </div>
    )
}

export default Footer;