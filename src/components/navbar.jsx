import React from 'react'
import{ Link }from 'react-router-dom'
import '../components/navbar.css'
import LogoAga from '../assets/image/logoaga.jpg'

export default function Navbar() {
  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-light  nav-back " style={{ backgroundColor: "rgba(19, 193, 236, 0.274)" }}>
      <Link className="navbar-brand text-info logo" to="/"><img src={LogoAga} alt="aga" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link btn btn-outline-success text-white " to="/about">Haqqında <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-success text-white" to="/myworks">İş nümunələri</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-success text-white " to="/sertficat">Sertfikatlar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-success text-white " to="/contact">Əlaqə məlumatları</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success aze-button text-white" type="submit">AZE</button>
          <button className="btn btn-outline-success  text-white" type="submit">ENG</button>
          <button className="btn btn-outline-success  text-white" type="submit">RUS</button>
        </form>
      </div>
    </nav>
  </>
  )}