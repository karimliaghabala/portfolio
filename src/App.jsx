import React from 'react'
import About from './components/about'
import Contact from './components/contact'
import Myworks from './components/myworks'
import Sertficat from './components/sertficat'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Seminar from './components/seminar'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import "./components/css_library/animation.css"
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myworks' element={<Myworks />} />
        <Route path='/sertficat' element={<Sertficat />} />
        <Route path='/seminar' element={<Seminar />} />
      </Routes>
      <Footer />
    </>
  )
}
