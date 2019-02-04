import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import Card from '@material-ui/core/Card'

class SignIn extends React.Component {
  state = {
    anchorEl: null,
    user: undefined
  }

  onSelectUser = (user) => {
    this.setState({
      user
    })
    this.handleClose()
  }

  signIn = () => {
    const { user } = this.state
    this.props.dispatch(setAuthedUser(user))
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl, user } = this.state
    const { authedUser, classes } = this.props

    if (authedUser !== null) {
      return <Redirect to='/home' />
    }

    return (
      <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Card style={{ padding: 15, paddingLeft: 30, paddingRight: 30, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <h1>Would You Rather !!</h1>
          <img style={{ height: 250, width: 250 }} src={require('../assets/icon.png')} />
          <h1> Sign In </h1>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            <h1>{user}</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Selct User
        </Button>
            {user && <Button onClick={() => this.signIn()} ><PlayCircleFilled style={{ color: 'green', fontSize: 40 }} /></Button>}
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {this.props.usersList.map((user) =>
              <MenuItem
                onClick={() => this.onSelectUser(user)}
                key={user}
              >
                {user}
              </MenuItem>
            )}
          </Menu>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    usersList: Object.keys(users),
    authedUser
  }
}

export default connect(mapStateToProps)(SignIn)
