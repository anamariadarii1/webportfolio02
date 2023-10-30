//rafce
import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
        </ul>
        
        <div className="footer__copyright">
          <small>&copy; ...</small>
        </div>
    </footer>
  )
}

export default footer