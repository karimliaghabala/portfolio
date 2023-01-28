import React, { useState } from 'react'
import "./about.css"
import "./css_library/animation.css"
import "./css_library/flexslider.css"
import "./css_library/style.css"
import Myphoto from "../assets/image/aga.png"
import {useTranslation } from 'react-i18next'

export default function About() {
    const [about, setAbout] = useState(false);
    const [text, setText] = useState("Davamını oxu");
    const { t } = useTranslation();
    

    const clickButton = () => {
        setAbout(true)
        setText("Davamını bağla")
        if(text === "Davamını bağla"){
            setAbout(!about)
            setText("Davamını oxu")
        }

    }
    return (
        <>
            <div className="container res secondText">
                <div className="blur blur-router"></div>
                <div className="right">
                    <img src={Myphoto} alt="myphoto" className='img-responsive animate-box fadeInUp animated' />
                </div>
                <div className="left fh5co-center-position ">
                    <p className='animate-box fadeInUp animated'>{t("read")}</p>
                    {about ? <p className='animate-box fadeInUp animated p2 '>{t("read2")}</p> : null}
                    <button  className='btn btnHover my-2 my-sm-0 animate-box fadeInUp animated text-white' onClick={clickButton}>{text}</button>
                </div>
            </div>
        </>
    )
}
