
import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import FreeBook from '../components/FreeBook.jsx'


function Home() {
    return (
        <div>
            <NavBar />
            <Banner />
            <FreeBook />
            <Footer />
        </div>
    )
}

export default Home