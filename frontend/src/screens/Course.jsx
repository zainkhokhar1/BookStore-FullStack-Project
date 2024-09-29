
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Courses from '../components/Courses.jsx'
import { useAuth } from '../components/ContextApi'
import Signup from '../components/Signup.jsx'
import Toast from 'react-hot-toast'
function Course() {
  let [Auth] = useAuth();
  return (
    <>
      <NavBar />
      {
        Auth ? <div className='min-h-screen'>
          <Courses />
        </div> :
          <>
            {Toast.error('Please first login to visit this Section')}
            <Signup />
          </>
      }

      <Footer />
    </>
  )
}

export default Course