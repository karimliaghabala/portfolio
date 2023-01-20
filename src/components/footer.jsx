import React from 'react'
import{ Link }from 'react-router-dom'
import '../components/footer.css'
import Linkedin from '../assets/image/linkedin.jpg'


export default function Footer() {
  return (
    <>
      <footer className="text-center text-white txtc" >
        {/* Grid container */}
        <div className="container p-4">
          <Link to="https://www.linkedin.com/in/agabala-karimli-317838a9/" target="_blank"> <img src={Linkedin} alt="linkedin" /></Link>
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3 textFooter" >
          © 2023 Copyright:
          <Link className="text-white" to="#!">Karimli Aghabala</Link>
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}