import React from 'react'
import imageGit from '../assets/image/git.jpg'
import './myworks.css'
import {useTranslation } from 'react-i18next'

export default function Myworks() {
    const { t } = useTranslation();

    return (
        <>
        <div className='git-container animate-box fadeInUp animated'>
            <p>{t("textcontact")}</p>
            <a href="https://github.com/karimliaghabala" target="_blank"><img src={imageGit} alt="git" /></a>
        </div>
        </>
    )
}
