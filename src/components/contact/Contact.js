import React from 'react'
import { StyledContact } from './StyledContact'

export default function Contact() {
  return (
    <StyledContact>
    <h2 id='contact'>Get In Touch</h2>
    <div>  
      <a href='mailto:mstefanutti24@gmail.com' target="blank" > <i class="fas fa-envelope-open-text"></i> mstefanutti24@gmail.com </a>
      <div>
        <a href='https://www.linkedin.com/in/matiasstefanutti/' target="blank" > <i class="fab fa-linkedin-in"> </i> </a>
        <a href='https://github.com/mstefa' target="blank" > <i class="fab fa-github"></i> </a>
        <a href='https://twitter.com/mstefanutti' target="blank" > <i class="fab fa-twitter"></i> </a>
      </div>
    </div>
    </StyledContact>
  )
}
