import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/home' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/signin'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar