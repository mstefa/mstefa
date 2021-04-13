import React from 'react'
import mstefa from '../../resources/CV.JPG'
import { StyledAbout } from './StyledAbout'

export default function About() {
  return (
    <StyledAbout>
      <h3>About Me</h3>
      <div >
        <div className='textContainer'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et justo libero. Etiam laoreet eros lacus, ac feugiat risus ultrices ac. Mauris nulla felis, lobortis a imperdiet et, porttitor non augue. Nullam eget eros nunc. Vivamus fermentum elit risus, sit amet malesuada est accumsan eget. Vestibulum ultrices ante odio, quis sagittis ipsum vehicula eget. Nam sagittis, mauris ut posuere tincidunt, magna sapien iaculis dolor, id pellentesque libero dolor sit amet augue. Aenean ornare interdum venenatis. Morbi eu massa interdum, efficitur lorem at, bibendum arcu. Nunc pulvinar lectus vel mauris bibendum facilisis.
            <ul>
            <li>JavaScript</li>
            <li>typeScipt</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Express</li>
          </ul>
        </div>
        <div className='imgContainer'>
          <img src={mstefa} alt='profile'></img>
        </div>
      </div>

    </StyledAbout>
  )
}
