import React from 'react'
import '../footer/footer.css'
import Linkedin from '../../assets/image/linkedin.svg';
import Facebook from '../../assets/image/facebook.svg';
import Twitter from '../../assets/image/twitter.svg';
import Instagram from '../../assets/image/instagram.svg';
import Whatsapp from '../../assets/image/whatsapp.svg';


export default function Footer() {
  return (
    <>
    <footer className="text-center text-white footer " >
          <div className='footer-top'>
          <a href="https://www.linkedin.com/in/agabala-karimli-317838a9111/" target="_blank"> <img src={Linkedin} alt="linkedin" /></a>
          <a href="https://www.facebook.com/heyatin.bashlangici111/" target="_blank"> <img src={Facebook} alt="Facebook" /></a>
          <a href="https://twitter.com/Kerimli_Agabala111" target="_blank"> <img src={Twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/agabala_zerdabi111/" target="_blank"> <img src={Instagram} alt="Instagram" /></a>
          <a href="https://wa.me/qr/MAMPEMBTIOGOO1111 " target="_blank"> <img src={Whatsapp} alt="Whatsapp" /></a>
{/*             linklerin sonuna 1 yazdim ki linkler ishlemesin */}
          </div>
        <div className="text-center p-3 textFooter" >
          © 2023 Copyright:
          <a className="text-white" href="#!">Karimli Aghabala</a>
        </div>
      </footer>

    </>
  )
}
