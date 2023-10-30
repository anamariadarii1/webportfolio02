import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'

const header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Ana-Maria Darii </h1>
         <h5 className="text-light">Student</h5>
         <CTA/>
         <HeaderSocials/>

         <div className='me'>
          <img src={ME} alt="me"/>
         </div>

         <a href='#contact' className='scroll__down'>Scroll Down</a>


        </div>
    </header>
  )
}

export default header