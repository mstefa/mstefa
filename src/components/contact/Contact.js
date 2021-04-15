import React from 'react'
import { StyledContact } from './StyledContact'

export default function Contact() {
  return (
    <StyledContact>
      <h2 id='contact'>Get In Touch</h2>
      <div className='contactContainer'>
        <p> Whether you have a question or just want to say hi, feel free to send me an email:</p>
        <a href='mailto:mstefanutti24@gmail.com' target="blank" > 
          <i class="fas fa-envelope-open-text"></i> mstefanutti24@gmail.com 
        </a>
        <p>or follow me in any social network:</p>
        <div>
          <a href='https://www.linkedin.com/in/matiasstefanutti/' target="blank" >
            <i class="fab fa-linkedin-in"> </i>
          </a>
          <a href='https://github.com/mstefa' target="blank" >
            <i class="fab fa-github"></i>
          </a>
          <a href='https://twitter.com/mstefanutti' target="blank" > <i class="fab fa-twitter"></i> </a>
        </div>
      </div>
    </StyledContact>
  )
}
