import React from 'react'
import './AboutSecond.css'
import ourImg from '../../assets/aboutOur.avif'
function AboutSecond() {
    return (
        <div>
            <div className="ourAbout">
                 <h2 className='ourTitle'>Biz haqimizda</h2>
                <div className='ourAbout-main   container our-main__container'>
                    <div className='main-title'>
                        <h2>Bizning missiyamiz</h2>
                        <p>Biznes egalari va tadbirkorlar uchun oddiy, ammo kuchli vositalar yaratish orqali ularning ishlarini soddalashtirish va samaradorligini oshirish.</p>
                        <p>Bizning CRM tizimimiz mijozlar bazasini boshqarish, loyihalarni kuzatish va savdo jarayonlarini optimallashtirish uchun mo'ljallangan.</p>
                        <p>Har bir biznesning o'ziga xos ehtiyojlarini tushunamiz va shunga mos yechimlarni taklif qilamiz.</p>
                    </div>
                    <div>
                        <img className='ourImg' src={ourImg} alt="ourImg" width={555} />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default AboutSecond