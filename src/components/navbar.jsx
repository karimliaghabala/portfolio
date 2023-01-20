import React from 'react'
import{ Link }from 'react-router-dom'
import '../components/navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-light  nav-back " style={{ backgroundColor: "rgba(19, 193, 236, 0.274)" }}>
      <Link className="navbar-brand text-info" to="/">Kərimli Ağabala</Link>
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
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
        </form>
      </div>
    </nav>
  </>
  )}