import React, { useState } from 'react';
import '../news/news.css';
import News1 from '../../assets/image/image-news/news1.png';
import News2 from '../../assets/image/image-news/news2.png';

const News = () => {
    const [news, setNews] = useState(false)
    return (
        <>
            <div className="container container-h">
                {news ? null : <div className="headline">
                    <div className="container-news">
                        <div className="left-c">
                            <img src={News1} alt="img" />
                        </div>

                        <div className="right-c">
                            <p>LET,VAR,CONST dəyişənlərinin fərqəri </p>
                            <button className='btn btnHover' onClick={() => { setNews(true) }} >Davamını oxu</button>
                        </div>
                    </div>

                </div>}

                {news ? <div className="news" >
                    <h3>LET,VAR,CONST dəyişənlərinin fərqəri</h3>
                    <p><p>"var", "const" ve "let" JavaScript'deki değişken tanımlama anahtar kelimeleridir ve farklı özelliklere sahiptirler:</p>
                        <img src={News1} alt="" />
                        <p>var: Eski tarz bir değişken tanımlama yöntemidir ve kapsam (scope) kuralları açısından sınırlıdır. Aynı isimde bir başka değişken tanımlanabileceği için tanımlama yerine göre farklı değerler alabilir ve global olarak erişilebilir.</p>
                        <img src={News2} alt="" />
                        <p>let: var'dan daha modern bir değişken tanımlama yöntemidir ve block scope kavramına sahiptir. Yani, tanımlandığı blok içinde geçerlidir ve dışında erişilemez. Aynı isimde başka bir değişken tanımlanamaz.</p>
                        <p>const: Değerinin değiştirilmemesi gereken değişkenler için kullanılır. Block scope kavramına sahiptir ve aynı isimde başka bir değişken tanımlanamaz. Değeri tanımlandıktan sonra değiştirilemez.</p></p>
                    <button className='btn btnHover' onClick={() => { setNews(false) }} >Əsas səhifəyə qayıt</button>
                </div> : null}

            </div>
        </>
    )
}

export default News