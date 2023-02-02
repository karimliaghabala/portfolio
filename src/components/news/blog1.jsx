import React from 'react'
import './news.css'
import News1 from '../../assets/image/image-news/news1.png';
import News2 from '../../assets/image/image-news/news2.png';
import { Link } from 'react-router-dom';

const Blog1 = () => {
  return (
    <>
      <div className="news" >
        <h3>LET,VAR,CONST dəyişənlərinin fərqəri</h3>
        <p><p>"VAR", "CONST" ve "LET" JavaScript'dəki dəyişən mənimsətmə üçün açar sözlərdir və fərqli xüsusiyyətlərə malikdirlər:</p>
          <img src={News1} alt="" />
          <p>VAR: Dəyişənləri təyin etmək üçün köhnə üslubdur və məhdud əhatə dairəsi var. Eyni ada malik başqa bir dəyişən təyin oluna bildiyi üçün o, təyin olunduğu yerdən asılı olaraq müxtəlif dəyərlər ala bilər və qlobal scopda istifadə edilə bilər</p>
          <img src={News2} alt="" />
          <p>Let: dəyişənləri təyin etmək üçün VARdan daha müasir metoddur və blok əhatə dairəsinə malikdir. Yəni, müəyyən edildiyi blokun daxilində keçərlidir və ondan kənarda tətbiq etmək mümkün deyil. Eyni ada malik başqa dəyişən təyin edilə bilməz</p>
          <p>CONST: Dəyəri dəyişdirilməməli olan dəyişənlər üçün istifadə olunur. Blokun əhatə dairəsində istifadə edilir və eyni adlı başqa dəyişən müəyyən edilə bilməz. Onun dəyəri müəyyən edildikdən sonra dəyişdirilə bilməz.</p></p>
          <Link className="nav-link btn text-white btnHover" to="/news">Əsas səhifəyə qayıt</Link>
      </div>
    </>

  )
}

export default Blog1