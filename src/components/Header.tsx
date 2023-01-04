import React from 'react'
import Resume from '../assets/Yonghwan_Kim_Resume.pdf'
import HeaderSocials from './HeaderSocials'
import ME from '../assets/photo.jpg'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
        <h5>Howdy! I am</h5>
        <h1>Yonghwan Kim</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <div className='cta'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href='#contact' className='btn-primary'>Let's Talk</a>
        </div>
        <div className='me'>
            <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
        </div>
    </header>
  )
}

export default Header