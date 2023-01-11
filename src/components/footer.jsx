import React from 'react'
import{ Link }from 'react-router-dom'
import '../components/footer.css'
import Image1 from '../assets/image/image1.jpg'
import Image2 from '../assets/image/image2.jpg'
import Image3 from '../assets/image/image3.jpg'
import Image4 from '../assets/image/image4.jpg'
import Image5 from '../assets/image/image5.jpg'
import Image6 from '../assets/image/image6.jpg'

export default function Footer() {
  return (
    <>
      <footer className="text-center text-white txtc" >
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Images */}
          <section >
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src={Image1} className="w-100" />
                  <Link to="#!">
                    <div/>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src={Image2} className="w-100" />
                  <Link to="#!">
                    <div/>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src={Image3} className="w-100" />
                  <Link to="#!">
                    <div/>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src={Image4} className="w-100" />
                  <Link to="#!">
                    <div/>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src={Image5} className="w-100" />
                  <Link to="#!">
                    <div/>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src={Image6} className="w-100" />
                  <Link to="#!">
                    <div/>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Images */}
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