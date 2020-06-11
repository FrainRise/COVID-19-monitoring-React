import React from 'react'

import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.personalData}>
                <input type="text" />
                <input type="text"/>
                <input type="text"/>
            </div>
            <div className={styles.message}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default ContactForm;