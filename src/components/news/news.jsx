import React from 'react';
import '../news/news.css';
import { Routes, Route } from 'react-router-dom';
import Blog1 from './blog1'
import Blog2 from './blog2'
import HeaderN from './header-n';
const News = () => {
    return (
        <>
            <HeaderN />
            <Routes>
                <Route path="blog1/" element={<Blog1 />} />
                <Route path="blog2/" element={<Blog2 />} />
            </Routes>
        </>
    )
}

export default News