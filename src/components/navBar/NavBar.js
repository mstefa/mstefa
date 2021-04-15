import React from 'react'
import Logo from '../../resources/Icon2Small.png'
import {StyledNav} from './StyledNavBar'

export default function NavBar() {
  return (
    <StyledNav>
      <div>
        <img id="logo" src={Logo} width="40" height="35" className="d-inline-block align-top" alt="Matias Stefanutti" />
      </div>

      <ul>
        {/* <li> Home </li> */}
        <li> <a href='#about'>About me</a> </li>
        <li> <a href='#projects'>Work</a> </li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>      
  
    </StyledNav>
  )
}
