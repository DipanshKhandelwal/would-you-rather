import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class NavBar extends React.Component {

  signOut = () => {
    this.props.dispatch(removeAuthedUser())
  }

  render() {
    const { authedUser, user } = this.props

    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/home' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/newquestion' exact>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact>
              Leaderboard
            </NavLink>
          </li>
          {authedUser
            ?
            <span>
              <p>Hello, {user ? user.name : null}</p>
              <li>
                <button onClick={this.signOut}>Sign Out</button>
              </li>
            </span>
            :
            <li>
              <NavLink to='/signin'>Sign In</NavLink>
            </li>
          }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser]

  return {
    authedUser,
    user
  }
}

export default connect(mapStateToProps)(NavBar)