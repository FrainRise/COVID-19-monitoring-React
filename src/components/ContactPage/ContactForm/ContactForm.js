import React from 'react'

import styles from './ContactForm.module.css'
import * as emailjs from 'emailjs-com'

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

    handleChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.name)
    }

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

        let templateParams = {
            from_name: this.state.name + '(' + this.state.email + ')',
            to_name: 'frainrise@gmail.com',
            subject: this.state.subject,
            message_html: this.state.description
        }

        emailjs.send('gmail','template_S6C5HxXY', templateParams, 'user_weOyQeOjIBJOmWL3D08QF')
            .then((res) => {
                console.log('SUCCESS', res.status, res.text)
                alert('The message has been sent')
            }, function (err){
                console.log(err);
                alert('Sorry, something goes wrong :C');
            })

        this.setState({
            name: '',
            email: '',
            subject: '',
            description: ''
        })   
    }

    render(){
        return (
            <form className={styles.contactForm}>
                <h2> Contact Form</h2>
                <input 
                    name="name"
                    required='required' 
                    type="text"
                    placeholder="Enter your name"
                    onChange={this.handleChangeInput} 
                    value={this.state.name}
                    error={this.state.errors.name}
                />
                <input 
                    name="email"
                    required='required' 
                    type="email"
                    placeholder="Enter your email" 
                    onChange={this.handleChangeInput} 
                    value={this.state.email}
                    error={this.state.errors.email}
                />
                <input 
                    name="subject"
                    required='required' 
                    type="text"
                    placeholder="Enter problem's subject" 
                    onChange={this.handleChangeInput} 
                    value={this.state.subject}
                    error={this.state.errors.subject}
                />
                <textarea 
                    name="description"
                    required='required' 
                    placeholder="Describe your question"
                    id="" 
                    cols="30"   
                    rows="5"
                    onChange={this.handleChangeInput} 
                    value={this.state.description}
                    error={this.state.errors.description}
                ></textarea>
                <button 
                    type="submit"
                    name="submit" 
                    className={styles.btnSumbit}
                    onClick={this.sendMessage.bind(this)}
                >
                    Send Message
                </button>
            </form>
        )
    }
}

