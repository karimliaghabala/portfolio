import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './news.css';

const Blog1 = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    fetch(`https://portfolio-api-six-rosy.vercel.app/${id}`)
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData);
        console.log(apiData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <>
      <div className="news" key={data.id}>
        <h3>{data.title}</h3>
        <p>
          {data.content}
          <img src={data.linkimg1} alt="img" /><br />
          {data.content1} <br />
          <img src={data.linkimg2} alt="img" /><br />
          {data.content2}
        </p>
        <Link className="nav-link btn text-white btnHover" to="/news">Əsas səhifəyə qayıt</Link>
      </div>
    </>
  );
};

export default Blog1;
