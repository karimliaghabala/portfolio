import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import '../components/navbar.css'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import LogoAga from '../assets/image/logoaga.jpg'

const translationAz = {
  about: "Haqqında",
  projects: "Proyektlər",
  certficates: "Sertfikatlar",
  contact: "Əlaqə"
}
const translationEn = {
  about: "About",
  projects: "Projects",
  certficates: "Certficates",
  contact: "Contact"
}
const translationRu = {
  about: "Обо мне",
  projects: "Проекты",
  certficates: "Сертификаты",
  contact: "Контакт"
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      az: { translation: translationAz },
      en: { translation: translationEn },
      ru: { translation: translationRu },
    },
    lng: 'az',
    fallbackLng: 'az',
    interpolation: {
      escapeValue: { escapeValue: false },
    }
  });

export default function Navbar() {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault()
    i18n.changeLanguage(e.target.value)
  }
  return (
    <Suspense fallback="Loading...">
      <nav className="navbar  navbar-expand-lg navbar-light  nav-back " style={{ backgroundColor: "rgba(19, 193, 236, 0.274)" }}>
        <Link className="navbar-brand text-info logo" to="/"><img src={LogoAga} alt="aga" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link btn btn-outline-success text-white " to="/about">{t("about")} <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success text-white" to="/myworks">{t("projects")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success text-white " to="/sertficat">{t("certficates")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success text-white " to="/contact">{t("contact")}</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 " onClick={onClick}>
            <button className="btn btn-outline-success aze-button text-white" type="submit" value="az">AZE</button>
            <button className="btn btn-outline-success  text-white" type="submit" value="en">ENG</button>
            <button className="btn btn-outline-success  text-white" type="submit" value="ru">RUS</button>
          </form>
        </div>
      </nav>
    </Suspense>
  )
}