import React from 'react'
import '../components/footer.css'
import Linkedin from '../assets/image/linkedin.jpg'
import Facebook from '../assets/image/facebook.jpg'
import Twitter from '../assets/image/twitter.jpg'
import Instagram from '../assets/image/instagram.jpg'
import Whatsapp from '../assets/image/whatsapp.jpg'


export default function Footer() {
  return (
    <>
      <footer className="text-center text-white txtc " >
        <div className="container container-1">
          <div className='container-2'>
          <a href="https://www.linkedin.com/in/agabala-karimli-317838a9/" target="_blank"> <img src={Linkedin} alt="linkedin" /></a>
          <a href="https://www.facebook.com/heyatin.bashlangici/" target="_blank"> <img src={Facebook} alt="Facebook" /></a>
          <a href="https://twitter.com/Kerimli_Agabala" target="_blank"> <img src={Twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/agabala_zerdabi/" target="_blank"> <img src={Instagram} alt="Instagram" /></a>
          <a href="https://wa.me/qr/MAMPEMBTIOGOO1 " target="_blank"> <img src={Whatsapp} alt="Whatsapp" /></a>
          </div>
        </div>
        <div className="text-center p-3 textFooter" >
          © 2023 Copyright:
          <a className="text-white" href="#!">Karimli Aghabala</a>
        </div>
      </footer>
    </>
  )
}