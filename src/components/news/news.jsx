
import React, { useState, useEffect } from 'react'
import '../news/news.css'
import { Link } from 'react-router-dom';
const News = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://portfolio-api-alpha.vercel.app/')
            .then(res => res.json())
            .then(apiData => setData(apiData))
            
    }, [])
    data.reverse()
    return (
        <>
            <div className="container container-h">
                <h2>BUNLARI MÜTLƏQ BİLMƏLİYİK</h2>
                <ul>
                    {data?.map(item => (
                        <li className="headline" key={item.id}>
                            <div className="container-news">
                                <div className="left-c">
                                    <img src={item.linkimg1} alt="img" />
                                </div>
                                <div className="right-c">
                                    <p>{item.title}</p>
                                    <Link className="nav-link btn text-white btnHover" to={`/blog1/${item.id}`} >Ətraflı oxu</Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default News