import React from 'react'

import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <form className={styles.contactForm}>
            <h2> Contact Form</h2>
            <input 
                name="fullname"
                type="text"
                placeholder="Enter your name" 
                
            />
            <input 
                name="email"
                type="email"
                placeholder="Enter your email" 
                
            />
            <input 
                name="subject"
                type="text"
                placeholder="Enter problem's subject" 
                
            />
            <textarea 
                name="description" 
                placeholder="Describe your question"
                id="" 
                cols="30" 
                rows="5"
                
            ></textarea>
            <button 
                type="submit"
                name="submit" 
                className={styles.btnSumbit}

            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm;