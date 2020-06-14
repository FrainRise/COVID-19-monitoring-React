import React from 'react'

import styles from './ContactForm.module.css'
// import * as emailjs from 'emailjs-com';

export default class ContactForm extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        description: '',
        errors: {
            name: '',
            email: '',
            subject: '',
            description: ''
        }

    }

    handleChangeSubmit = e => this.setState({ [e.target.name]: e.target.value})

    validateMail() {
        let errors = {}, formIsValid = true;
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
       
        if(!this.state.name || this.state.name.length < 3) {
            errors.name = 'Minimum 3 symbols for name';
            formIsValid = false
        }

        if(!this.state.email || this.state.email.length < 3) {
            errors.email = 'Minimum 3 symbols for email';
            formIsValid = false
        }

        if(!this.state.subject || this.state.subject.length < 3) {
            errors.subject = 'Minimum 3 symbols for subject';
            formIsValid = false
        }

        if(!this.state.description || this.state.description.length < 10) {
            errors.description = 'Minimum 3 symbols for description';
            formIsValid = false
        }

        if(!pattern.test(this.state.email)) {
            errors.email = 'This is not valid email';
            formIsValid = false;
        }

        this.setState({ errors: errors })

        return formIsValid;
    }

    sendMessage(e) {
        e.preventDefault();
        if(!this.validateMail) {
            return ;
        }


    }

    render(){
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
}

