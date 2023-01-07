import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <div className='contact animate-box fadeInUp animated ' >
            <form id="formFeedback ">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='color-f'>Ad və Soyad</label>
                    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" required
                        placeholder="Ad və soyadınızı daxil edin"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='color-f'>Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleFormControlInput2" required
                        placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" className='color-f'>Təklif və iradlarınızı bizimlə bölüşün</label>
                    <textarea type="text" className="form-control" name="mesagge" rows="2"></textarea>
                </div>
                <button id="submitEmail" type="submit" className="btn btn-outline-success my-2 my-sm-0 color-f">Göndər</button>
            </form>
        </div>
    )
}
