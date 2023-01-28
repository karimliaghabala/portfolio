import React from 'react'
import '../footer/footer.css'
import Linkedin from '../../assets/image/linkedin.svg';
import Facebook from '../../assets/image/facebook.svg';
import Twitter from '../../assets/image/twitter.svg';
import Instagram from '../../assets/image/instagram.svg';
import Whatsapp from '../../assets/image/whatsapp.svg';
import {Link} from 'react-scroll';


export default function Footer() {
  return (
    <>
    <footer className="text-center text-white footer " >
          <div className='footer-top'>
          <Link to="https://www.linkedin.com/in/agabala-karimli-317838a9/" target="_blank"> <img src={Linkedin} alt="linkedin" /></Link>
          <Link to="https://www.facebook.com/heyatin.bashlangici/" target="_blank"> <img src={Facebook} alt="Facebook" /></Link>
          <Link to="https://twitter.com/Kerimli_Agabala" target="_blank"> <img src={Twitter} alt="Twitter" /></Link>
          <Link to="https://www.instagram.com/agabala_zerdabi/" target="_blank"> <img src={Instagram} alt="Instagram" /></Link>
          <Link to="https://wa.me/qr/MAMPEMBTIOGOO1 " target="_blank"> <img src={Whatsapp} alt="Whatsapp" /></Link>
          </div>
        <div className="text-center p-3 textFooter" >
          © 2023 Copyright:
          <a className="text-white" href="#!">Karimli Aghabala</a>
        </div>
      </footer>

    </>
  )
}