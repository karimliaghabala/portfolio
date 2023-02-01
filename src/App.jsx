import React from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Myworks from './components/myworks/myworks'
import Sertficat from './components/sertficat/sertficat'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Seminar from './components/seminar/seminar'
import News from './components/news/news'
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
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </>

  )
}
