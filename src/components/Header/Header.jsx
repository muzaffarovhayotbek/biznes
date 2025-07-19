import React from 'react'
import './Header.css'
import { FaUserTie } from "react-icons/fa";

function Header() {
    return (
        <div>
            <header className='header'>
                <div className="container header__container">
                    <div className="header-icon">
                        <a href="#">
                            <FaUserTie /> <i>BiznesCRM</i>
                        </a>
                    </div>

                    <div className="header-nav">
                        <ul className='header-nav'>
                            <li><a href="#about">Bosh sahifa</a></li>
                            <li><a href="#ourabout">Biz haqimizda</a></li>
                            <li><a href="#features">Biz Xususiyatlar</a></li>
                            <li><a href="#contact">Bog'lanish</a></li>
                            <li><a href="#">CRMga kirish</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header