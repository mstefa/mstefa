import React from 'react'
import {StyledMainProject} from './StyledMainProject'

export default function MainProject({project}) {
  return (
    <StyledMainProject>
      <div className='img-contanier'>
        <img src={process.env.PUBLIC_URL +  project.img} alt='project cover'></img>
      </div>

      <div className='text-container'>
        <h3>{project.name} </h3>
        <p> {project.description} </p>
        <ul>
          {project.technologies.map((tec) => <li>{tec}</li>)}
        </ul>
        {project.repository? <a href={project.repository} target="blank" > <i class="fab fa-github"></i>     </a> : <></> }
        { project.page     ? <a href={project.page}target="blank" > <i class="fas fa-external-link-alt"></i> </a> : <></> }
      </div>

    </StyledMainProject>  
  )
}
