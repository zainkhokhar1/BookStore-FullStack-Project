
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <NavBar />
            <div className='h-screen flex md:flex-1 md:flex-row mt-22 items-center mb-16 px-8 md:my-12 flex-col mt-20'>
                <div className="left">
                    <img className='md:max-w-[37rem]' src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20164.jpg?t=st=1727354890~exp=1727358490~hmac=f76f3e38d95e80ce18ba85fb9e75d987d22dc2451212da25b5e96ce164701e07&w=740" alt="About_Img" />
                </div>
                <div className="right md:pl-20 md:mt-28 mt-6 font-bold">
                    <h1 className='text-purple-600 text-4xl'>
                        About Us
                    </h1>
                    <p className='py-4 leading-12 font-semibold text-lg tracking-wider'>
                        Welcome to our bookstore, where every page turns into an adventure! We curate a diverse selection of titles, from timeless classics to contemporary bestsellers, ensuring there's something for every reader. Our passion for books drives us to create a cozy online haven for fellow book lovers.
                    </p>
                    <img className='max-w-[15rem] ml-12' src="https://img.freepik.com/premium-vector/thank-you-lethering-speech-buble_339976-95371.jpg?w=740" alt="Thank-Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About