
import React, { Children } from 'react'
import Home from './screens/Home'
import Course from './screens/Course';
import Signup from './components/Signup';
import Contact from './screens/Contact';
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './screens/About';

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App
