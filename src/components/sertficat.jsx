import React from 'react'
import './sertficat.css'
import Image1 from '../assets/image/sertficats/1.jpeg'
// import Image2 from '../assets/image/sertficats/23.jpg'
import Image3 from '../assets/image/sertficats/3.jpg'
//import Image4 from '../assets/image/sertficats/4.jpg'
//import Image5 from '../assets/image/sertficats/5.jpg'
//import Image6 from '../assets/image/sertficats/6.png'

export default function Sertficat() {
    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
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
                    <img className="d-block w-100" src={Image3} alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Image1} alt="Third slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Image3} alt="Fourth slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Image1} alt="Fifth slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Image3} alt="Sixth slide"></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
    )
}
