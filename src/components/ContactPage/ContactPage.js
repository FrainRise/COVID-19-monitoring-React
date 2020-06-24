import React from 'react'

import { Introduction, ContactForm, AddressSection } from '.'
import './responsive-contact.css'

const ContactPage = () => {
    return (
        <div>
            <Introduction />
            <ContactForm />
            <AddressSection />
        </div>
    )
}

export default ContactPage;