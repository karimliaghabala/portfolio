import React from 'react'
import About from './components/about'
import Contact from './components/contact'
import Myworks from './components/myworks'
import Sertficat from './components/sertficat'
import Footer from './components/footer'
import { Routes, Route, Link } from 'react-router-dom'
import "./App.css"
import "./components/css_library/animation.css"
export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-back ">
        <Link className="navbar-brand" to="/">Kərimli Ağabala</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link btn btn-outline-success my-2 my-sm-0 " to="/about">Haqqında <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success my-2 my-sm-0 " to="/myworks">İş nümunələri</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success my-2 my-sm-0 " to="/sertficat">Sertfikatlar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success my-2 my-sm-0 " to="/contact">Əlaqə məlumatları</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Footer/>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myworks' element={<Myworks />} />
        <Route path='/sertficat' element={<Sertficat />} />
      </Routes>
    </>
  )
}
