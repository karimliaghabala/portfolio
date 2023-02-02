import React, { useState } from 'react';
import '../news/news.css';
import News1 from '../../assets/image/image-news/news1.png';
import News2 from '../../assets/image/image-news/news2.png';
import News3 from '../../assets/image/image-news/dom.jpg';
import News4 from '../../assets/image/image-news/in1.jpg';
import News5 from '../../assets/image/image-news/in2.jpg';
import News6 from '../../assets/image/image-news/in3.jpg';
import News7 from '../../assets/image/image-news/in4.jpg';
import News8 from '../../assets/image/image-news/in5.jpg';
import News9 from '../../assets/image/image-news/in6.jpg';
import News10 from '../../assets/image/image-news/in7.jpg';

const News = () => {
    const [news, setNews] = useState(false)
    const [news2, setNews2] = useState(false)
    return (
        <>
            <div className="container container-h">
                <h2>BUNLARI MÜTLƏQ BİLMƏLİYİK</h2>
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

                {news2 ? null :<div className="headline">
                    <div className="container-news">
                        <div className="left-c">
                            <img src={News3} alt="img" />
                        </div>

                        <div className="right-c">
                            <p>Difference in Javascript properties(innerHTML, innerText, textContent) </p>
                            <button className='btn btnHover' onClick={() => { setNews2(true) }} >Davamını oxu</button>
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

                {news2 ? <div className="news2" >
                    <h3>Difference in Javascript properties(innerHTML, innerText, textContent).</h3>
                    <p>Have you heard about DOM manipulation? Let’s see what is DOM?
                        Document Object Model (DOM) is a programming interface for HTML. Simply you can say, the structure of your HTML document. The DOM is a tree-like representation of the contents of a webpage using nodes instead of elements. These nodes represent HTML elements, and they can be manipulated and re-rendered. The DOM is hierarchical, following a logical
                        tree-like structure, where child nodes are contained in parent nodes.</p>
                    <img src={News3} className="dom" alt="" />
                    <p>You will see three properties while working on DOM i.e innerText, innerHTML, textContent. You’ll need to know how to change the text or the HTML that appears on the page to make your sites more interactive. All innerText, innerHTML and textContent properties let you access and change the contents of a tag. That’s where the innerText and innerHTML, textContent HTML attributes come in. People sometimes got confused about these three properties. It’s time to clear all the confusion and get to know where to use these properties.</p>
                    <img src={News4} alt="" />
                    <h6>HTML that we will use for examples</h6>
                    <p>innerHTML
                        The JavaScript innerHTML property sets the HTML contents of an element on a web page. InnerHTML is a property of the HTML DOM and is often used to set and modify the contents of an  element. innerHTML returns the content of an element and any spacing and descendants. innerHTML returns all text, including HTML tags, that is contained by an element.</p>

                    <img src={News5} alt="" />
                    <h6>Javascript code for innerHTML</h6>
                    <img src={News6} alt="" />
                    <h6>Javascript code for innerHTML (Output)</h6>
                    <p>innerText
                        The JavaScript innerText property sets the text content of an element that is visible on a web page are accessed. The hidden content cannot be retrieved. It also sets the contents of its descendants. innerText returns the text without any descendants or spacing. You would use innerText if you want to see the contents of an element in plain text. innerText returns all text and tags contained by an element and all its child elements.</p>

                    <img src={News7} alt="" />
                    <h6>Javascript code for innerText</h6>
                    <img src={News8} alt="" />
                    <h6>Javascript code for innerText (Output)</h6>
                    <p></p>
                    <p>textContent
                        In textContent, all the text including the hidden contents can be accessed. textContents is all text contained by an element and all its children that are for formatting purposes only.</p>
                    <img src={News9} alt="" />
                    <h6>Javascript code for textContent</h6>
                    <img src={News10} alt="" />
                    <h6>Javascript code for textContent (Output)</h6>
                    <button className='btn btnHover' onClick={() => { setNews2(false) }} >Əsas səhifəyə qayıt</button>
                </div>: null}

            </div>
        </>
    )
}

export default News