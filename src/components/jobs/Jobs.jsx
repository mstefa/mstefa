import React from 'react'
import {StyledJobs} from './StyledJobs'

export default function Jobs() {
  return (
    <StyledJobs>
      <h2 id='projects'> <i class="far fa-paper-plane"></i>Where I’ve Worked</h2>
      <div className='description-container'>
        <h3>Software enginer @ <a href="https://mercadolibre.com/">Mercado Libre</a></h3>
        <p>
        Part of the CX-IT team, maintaining CRM channels services, such as phone calls and messaging, built on Java and JavaScript.
        Currently, working on replacing the old legacy monolith chat application with a micro-services structure, writing mainly in Golang and JavaScript.
        </p>
        <ul>
            <li>GoLang</li>
            <li>JavaScript</li>
            <li>Microservices</li>
            <li>Hexagonal Architecture</li>
          </ul>
      </div>
    </StyledJobs>
  )
}
