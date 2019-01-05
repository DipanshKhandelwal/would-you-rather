import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends React.Component {

  state = {
    user: undefined
  }

  onSelectUser = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  signIn = () => {
    const { user } = this.state
    this.props.dispatch(setAuthedUser(user))
  }

  render() {

    const { user } = this.state
    const { authedUser } = this.props
    if (authedUser !== null) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <select value={user} onChange={this.onSelectUser} >
          <option value="" hidden style={{ textDecorationColor: 'grey' }}>Select User</option>
          {this.props.usersList.map((user) =>
            <option value={user} key={user} >{user}</option>
          )}
        </select>
        <div>
          {user}
        </div>
        <button disabled={!user} onClick={this.signIn} >
          Sign in
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    usersList: Object.keys(users),
    authedUser
  }
}

export default connect(mapStateToProps)(SignIn)