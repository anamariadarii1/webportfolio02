import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='shorturl.at/jkpIN' target="_blank"><BsLinkedin/></a>
        {/* <a href='https://mail.google.com/mail/u/0/#inbox'><FaGithub/></a>
        <a href='https://chat.openai.com/chat'><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials