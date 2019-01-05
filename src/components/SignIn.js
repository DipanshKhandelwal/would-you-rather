import React from 'react'
import { connect } from 'react-redux'

class SignIn extends React.Component {

  state = {
    user: undefined
  }

  onSelectUser = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  render() {
    return (
      <div>
        <select value={this.state.user} onChange={this.onSelectUser} >
          <option value="" hidden style={{ textDecorationColor: 'grey' }}>Select User</option>
          {this.props.usersList.map((user) =>
            <option value={user} key={user} >{user}</option>
          )}
        </select>
        <div>
          {this.state.user}
        </div>
        <button>
          Sign in
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    usersList: Object.keys(users),
  }
}

export default connect(mapStateToProps)(SignIn)