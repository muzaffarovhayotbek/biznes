import React from 'react'
import './Footer.css'
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className="container footer__container">
                    <div className='footer-grid'>
                        <div className='footer-col'>
                            <h2>BiznesCRM</h2>
                            <p>Biznesingizni rivojlantirish uchun eng yaxshi CRM yechimi.</p>
                        </div>
                        <div className='footer-col'>
                            <h2>Tez havolalar</h2>
                            <a href="#">Bosh sahifa</a>
                            <a href="#">Biz haqimizda</a>
                            <a href="#">Xususiyatlar</a>
                            <a href="#">Bog'lanish</a>
                        </div>
                        <div className='footer-col'>
                            <h2>Xizmatlar</h2>
                            <a href="#">CRM tizimi</a>
                            <a href="#">Veb-sayt yaratish</a>
                            <a href="#">Mobil ilova</a>
                            <a href="#">Marketing</a>
                        </div>
                        <div className='footer-link'>
                            <h2>Ijtimoiy tarmoqlar</h2>
                            <div className='links'>
                                <FaTelegram className='telegram'></FaTelegram>
                                <FaFacebook className='facebook'></FaFacebook>
                                <FaInstagram className='instagram'></FaInstagram>
                                <FaYoutube className='youtube'></FaYoutube>
                            </div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <h3 className='footer-title'>© 2023 BiznesCRM. Barcha huquqlar himoyalangan.</h3>

                </div>
            </footer>
        </div>
    )
}

export default Footer
