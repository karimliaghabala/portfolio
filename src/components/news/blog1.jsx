import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './news.css'
import { Link } from 'react-router-dom';

const Blog1 = () => {
  const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(() => {
      fetch(`https://portfolio-api-six-rosy.vercel.app/${id}`)
          .then(res => res.json())
          .then(apiData => setData(apiData))
  }, [id])
  return (
    <>
    <ul>
      {data?.map(item=>(
              <li className="news"  key={item.id}>
              <h3>{item.title}</h3>
              <p><p>{item.content}</p>
                <img src={item.linkimg1} alt="" />
                <p>{item.content1}</p>
                <img src={item.linkimg2} alt="" />
                <p>{item.content2}</p></p>
                <Link className="nav-link btn text-white btnHover" to="/news">Əsas səhifəyə qayıt</Link>
            </li>
      ))}
    </ul>
    </>

  )
}

export default Blog1