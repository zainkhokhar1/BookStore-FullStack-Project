
import React, { Children } from 'react'
import Home from './screens/Home'
import Course from './screens/Course';
import Signup from './components/Signup';
import Contact from './screens/Contact';
import { Toaster } from 'react-hot-toast';
import UserProfile from './screens/UserProfile';
import ShowBook from './screens/ShowBook';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './screens/About';
import CreateBook from './screens/CreateBook';

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
          <Route path='/show/:Id' element={<UserProfile />} />
          <Route path='/book/create/:id' element={<CreateBook />} />
          <Route path='/book/:id' element={<ShowBook />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App
