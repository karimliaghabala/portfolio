import React from 'react'
import imageGit from '../../assets/image/git.jpg'
import '../myworks/myworks.css'
import { useTranslation } from 'react-i18next'

export default function Myworks() {
    const { t } = useTranslation();

    return (
        <>
            <div className='git-container animate-box fadeInUp animated'>
                <h1>LAYIHƏLƏR</h1>
                <div className="container-portfolio">
                    <div >
                        <div className=" cp-all">
                            <p>Coğrafiya portalı</p>
                            <a href="https://cografiya-info.vercel.app/" target="_blank">Keçid linki</a>
                            <a href="#" target="_blank">Github linki(real layihə)(yekunlaşmayıb)</a>
                        </div>
                        <div className=" cp-all">
                            <p>Əvvəlki portfolio</p>
                            <a href="https://agabala93.vercel.app/" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/html-css-js-my-site-" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>To do list</p>
                            <a href="https://js-layihe.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/js-layihe-" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>Search coins(admin panel)</p>
                            <a href="https://admin-panel-back.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/admin-panel-back" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>LOTEREYA OYUNU</p>
                            <a href="https://lotereya-oyun.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/lotereyaOyun" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>Roll Dice game</p>
                            <a href="https://roll-dice-three.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/ROLL-DICE" target="_blank">Github linki</a>
                        </div>
                    </div>
                    <div >
                        <div className=" cp-all">
                            <p>Fitness gym app</p>
                            <a href="https://gym-fitness-app-eta.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/gym-fitness-app" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>React Redux movie app</p>
                            <a href="react-redux-movie-app-gray.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/react-redux-movie-app" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>Online magazine</p>
                            <a href="https://magazin-html-css.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/magazin-html-css-" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>Search coins</p>
                            <a href="https://back-end-layihe.vercel.app" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/back-end-layihe" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>Chorme Dino Game</p>
                            <a href="https://the-easiest-javascript-game-ever.vercel.app/" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/The-Easiest-Javascript-Game-Ever" target="_blank">Github linki</a>
                        </div>
                        <div className=" cp-all">
                            <p>Search (ReactJS ViteJS)</p>
                            <a href="https://react-vitejs-search.vercel.app/" target="_blank">Keçid linki</a>
                            <a href="https://github.com/karimliaghabala/react-vitejs-search" target="_blank">Github linki</a>
                        </div>
                    </div>
                </div>
                <p>{t("textcontact")}</p>
                <a href="https://github.com/karimliaghabala" target="_blank"><img src={imageGit} alt="git" /></a>
            </div>
        </>
    )
}
