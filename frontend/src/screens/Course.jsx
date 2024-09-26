
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Courses from '../components/courses'

function Course() {
  return (
    <>
      <NavBar />
      <div className='min-h-screen'>
        <Courses />
      </div>
      <Footer />
    </>
  )
}

export default Course