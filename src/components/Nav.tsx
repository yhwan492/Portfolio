import React from 'react' 
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageDetail, BiCodeAlt} from 'react-icons/bi'
import {HiOutlineCode} from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#home'><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href='#projects'><HiOutlineCode /></a>
      <a href='#experience'><BiBook /></a>
      <a href='#contact'><BiMessageDetail /></a>

    </nav>
    // <nav>
    //   <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
    //   <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
    //   <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><HiOutlineCode /></a>
    //   <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook /></a>
    //   <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageDetail /></a>

    // </nav>
  )
}

export default Nav