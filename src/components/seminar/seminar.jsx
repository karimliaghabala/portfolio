import React from 'react';
import '../seminar/seminar.css';
import Image1 from '../../assets/image/image1.jpg';
import Image2 from '../../assets/image/image2.jpg';
import Image3 from '../../assets/image/image3.jpg';
import Image4 from '../../assets/image/image4.jpg';
import Image5 from '../../assets/image/image5.jpg';
import Image6 from '../../assets/image/image6.jpg';
import {useTranslation } from 'react-i18next';

export default function Seminar() {
    const { t } = useTranslation();
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="blur blur-router"></div>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner animate-box fadeInUp animated ">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Image1} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image2} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image3} alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image4} alt="Fourth slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image5} alt="Fifth slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image6} alt="Sixth slide"></img>
                    </div>
                </div>
                <a className="carousel-control-prev slidePrev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="makePage">{t("prev")}</span>
                </a>
                <a className="carousel-control-next slideNext" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="makePage">{t("next")}</span>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </>
    )
}
