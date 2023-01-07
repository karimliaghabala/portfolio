import React from 'react'
import imageGit from '../assets/image/git.jpg'
import './myworks.css'

export default function Myworks() {
    return (
        <>
        <div className='git-container animate-box fadeInUp animated'>
            <p>İş nümunələri üçün zəhmət olmasa GİTHUB hesabımı izləyin...</p>
            <a href="https://github.com/karimliaghabala" target="_blank"><img src={imageGit} alt="git" /></a>
        </div>
        </>
    )
}
