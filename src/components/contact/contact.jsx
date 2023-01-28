import React, { useRef} from 'react';
import '../contact/contact.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const { t } = useTranslation();
    const handleClick = (e) => {
        e.preventDefault()
        emailjs.sendForm('default_service', 'template_trcpd9k', form.current, 'Z7DQCa4EOTN-AkwnG')
            .then((result) => {
                console.log(result.text);
                alert('Məktub göndərildi...')
            }, (error) => {
                console.log(error.text);
            });
            exampleFormControlInput1.value = ''
            exampleFormControlInput2.value = ''
            exampleFormControlTextarea1.value = ''
    };
    return (
        <div className='contact animate-box fadeInUp animated ' >
            <div className="blur blur-router"></div>
            <form id="formFeedback " ref={form} onSubmit={handleClick}>
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
                    <textarea type="text" className="form-control" id='exampleFormControlTextarea1' name="mesagge" rows="2"></textarea>
                </div>
                <button id="submitEmail " type="submit" className="btn btnHover my-2 my-sm-0 text-white">{t("submit")}</button>
            </form>

        </div>
    )
}
