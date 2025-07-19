import React from 'react'
import './Feature.css'
function Feature() {
  return (
    <div>
         <div className='feature'>
        <div className="container main">
          <h2 className='feature-title'>Bizning xususiyatlarimiz</h2>
          <h3 className='feature-desc'>CRM tizimimiz sizga qanday yordam beradi</h3>
          <div className='four'>
            <div className='first'>
              <h2>Mijozlar boshqaruvi</h2>
              <p>Barcha mijozlaringizning ma'lumotlarini bir joyda saqlang va ular bilan aloqalaringizni kuzatib boring.</p>
            </div>
            <div className='second'>
              <h2>Analitika</h2>
              <p>Kuchli hisobotlar va tahlillar orqali biznesingiz rivojlanishini kuzatib boring.</p>
            </div>
            <div className='three'>
              <h2>Vazifalar</h2>
              <p>Jamoa a'zolaringiz uchun vazifalar yarating va ularni bajarilishini kuzatib boring.</p>
            </div>
            <div className='saiv'>
              <h2>Xavfsizlik</h2>
              <p>Ma'lumotlaringiz yuqori darajada himoyalangan va muntazam ravishda zaxiralanadi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature