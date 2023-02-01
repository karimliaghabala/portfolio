import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/navbar.css'
import {useTranslation } from 'react-i18next'
import LogoAga from '../../assets/image/logoaga.jpg'
import Language from '../language/language'



export default function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light  nav-back " style={{ backgroundColor: "rgba(255, 255, 255, 0.062)" }}>
      <div className="blur blur-router"></div>
        <Link className="navbar-brand text-info logo" to="/"><img src={LogoAga} alt="aga" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link btn text-white btnHover " to="/about">{t("about")} <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn text-white btnHover" to="/myworks">{t("projects")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn  text-white btnHover" to="/sertficat">{t("certficates")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn text-white btnHover" to="/seminar">{t("presentations")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn text-white btnHover" to="/news">{t("news")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn text-white btnHover" to="/contact">{t("contact")}</Link>
            </li>
          </ul>
            <div>
              <Language/>
            </div>
        </div>
      </nav>
    </>
  )
}