import React from 'react'
import './sertficat.css'
import Image1 from '../assets/image/sertficats/1.jpeg'
import Image2 from '../assets/image/sertficats/2.jpg'
import Image3 from '../assets/image/sertficats/3.jpg'
import Image4 from '../assets/image/sertficats/4.jpg'
import Image5 from '../assets/image/sertficats/5.jpg'
import Image6 from '../assets/image/sertficats/6.png'

export default function Sertficat() {
    return (
        <>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner animate-box fadeInUp animated ">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={Image1} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Image2} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Image3} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Image4} alt="Fourth slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Image5} alt="Fifth slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Image6} alt="Sixth slide"></img>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </>
    )
}
