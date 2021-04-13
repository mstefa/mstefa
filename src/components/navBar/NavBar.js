import React from 'react'
import Logo from '../../resources/mstefa-Icon.png'
import {StyledNav} from './StyledNavBar'

export default function NavBar() {
  return (
    <StyledNav>

      <img id="logo" src={Logo} width="40" height="40" className="d-inline-block align-top" alt="Matias Stefanutti" />

      <ul>
        <li> Home </li>
        <li> About me </li>
        <li> Work </li>
        <li> Contact </li>
      </ul>      
  
    </StyledNav>
  )
}
