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
            <NavLink to='/home' activeStyle={{ fontWeight: 'bold' }} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/newquestion' activeStyle={{ fontWeight: 'bold' }} >
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeStyle={{ fontWeight: 'bold' }} >
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
              <NavLink to='/signin' activeStyle={{ fontWeight: 'bold' }}  >Sign In</NavLink>
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