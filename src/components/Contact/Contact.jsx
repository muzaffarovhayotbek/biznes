import React from 'react'
import './Contact.css'
import { IoLocationOutline } from "react-icons/io5";
function Contact() {
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className='contact-title'>
                        <h2>Biz bilan bog'lanish</h2>
                        <p>Savollaringiz bo'lsa, bizga murojaat qiling</p>
                    </div>
                    <div className='contact__container  '>
                        <div className='information'>
                            <h2>Aloqa ma'lumotlari
                            </h2>
                            <p>Biz bilan bog'lanish uchun quyidagi usullardan foydalanishingiz mumkin:</p>

                            <div className='information-main'>
                                <div className='info'>
                                    <span>Toshkent shahri, Yunusobod tumanis</span>
                                </div>
                                <div className='phone'>
                                    <span>+998 90 123 45 67</span>
                                </div>
                                <div className='email'>
                                    <span>info@biznescrm.uz</span>
                                </div>
                                <div className='week'>
                                    <span>Dushanba-Juma: 9:00 - 18:00</span>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <form className='form'>
                                <div className='name'>
                                    <label>Ismingiz</label>
                                    <input type="text" placeholder='name' />
                                </div>
                                <div className='email'>
                                    <label>Email manzilingiz</label>
                                    <input type="text" placeholder='Email' />
                                </div>
                                <div className='theme'>
                                    <label>Mavzu</label>
                                    <input type="text" placeholder='mavzu' />
                                </div>
                                <div className='message'>
                                    <label>Xabaringiz</label>
                                    <textarea></textarea>
                                </div>
                                <button type='submit' className='btn'>Xabar yuborish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact