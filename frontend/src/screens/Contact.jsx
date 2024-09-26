
import React from 'react'
import ContactForm from '../components/ContactForm'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function Contact() {
    return (
        <>
            <NavBar />
            <div>
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact