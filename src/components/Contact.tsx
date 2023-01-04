import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>    
        <section id='contact'>
            <div>Contact</div>
            <div className="flex items-center">
                <a className='inline-flex'>+1 979-739-8702</a>
                <a className='inline-flex'>{/*<img src="https://img.icons8.com/ios/50/null/apple-mail.png"/>*/}kyhwan492@gmail.com</a>
                <a className='inline-flex'>{/*<img src="https://img.icons8.com/ios/50/null/apple-mail.png"/>*/}kyhwan492@tamu.edu</a>
                 <a className='inline-flex' href='https://github.com/yhwan492/'>{/*<img src="https://img.icons8.com/ios-glyphs/30/null/github.png"/>*/}Link to Github</a> 
                 <a className='inline-flex' href='https://www.linkedin.com/in/kyhwan492/'>{/*<img src="https://img.icons8.com/ios-glyphs/30/null/linkedin.png" />*/}Link to LinkedIn</a>
            </div>
        </section>
    </>
    
  )
}

export default Contact