import React from 'react'
import '../news/news.css'
import News1 from '../../assets/image/image-news/news1.png';
import News3 from '../../assets/image/image-news/dom.jpg';
import { Link } from 'react-router-dom';
const HeaderN = () => {
  return (
    <div className="container container-h">
              <h2>BUNLARI MÜTLƏQ BİLMƏLİYİK</h2>
                <div className="headline">
                    <div className="container-news">
                        <div className="left-c">
                            <img src={News1} alt="img" />
                        </div>
                        <div className="right-c">
                            <p>LET,VAR,CONST dəyişənlərinin fərqəri </p>
                            <Link className="nav-link btn text-white btnHover" to="/blog1" >Davamını oxu</Link>
                        </div>
                    </div>
                </div>
                <div className="headline">
                    <div className="container-news">
                        <div className="left-c">
                            <img src={News3} alt="img" />
                        </div>
                        <div className="right-c">
                            <p>Difference in Javascript properties(innerHTML, innerText, textContent) </p>
                            <Link className="nav-link btn text-white btnHover" to="/blog2" >Davamını oxu</Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default HeaderN