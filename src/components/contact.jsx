import React from 'react'
import './contact.css'
import {useTranslation } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation();
    const handleClick = (e) => {
        e.preventDefault()
        const serviceID = 'default_service';
        const templateID = 'template_trcpd9k';

        emailjs.sendForm(serviceID, templateID)
            .then(() => {
                alert('Məktub Göndərildi');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    };
    return (
        <div className='contact animate-box fadeInUp animated ' >
            <form id="formFeedback ">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='text-white'>{t("fullname")}</label>
                    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" required
                        placeholder={t("insertFullName")}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className=' text-white'>{t("ePost")}</label>
                    <input type="email" className="form-control" name="email" id="exampleFormControlInput2" required
                        placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" className=' text-white'>{t("offer")}</label>
                    <textarea type="text" className="form-control" name="mesagge" rows="2"></textarea>
                </div>
                <button id="submitEmail " type="submit" className="btn btn-outline-success my-2 my-sm-0 text-white" onClick={handleClick}>{t("submit")}</button>
            </form>

        </div>
    )
}
