import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {

  signOut = () => {
    this.props.dispatch(removeAuthedUser())
  }

  render() {
    const { classes, authedUser, user } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to='/' style={{ color: 'white', textDecoration: 'none' }} >
                Would You Rather ?
            </Link>
            </Typography>
            <Link to='/home' style={{ color: 'white', textDecoration: 'none' }} >
              <Button color="inherit">Home</Button>
            </Link>
            <Link to='/add' style={{ color: 'white', textDecoration: 'none' }} >
              <Button color="inherit">New Question</Button>
            </Link>
            <Link to='/leaderboard' style={{ color: 'white', textDecoration: 'none' }} >
              <Button color="inherit">Leaderboard</Button>
            </Link>
            {authedUser
              ?
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 20,
                }} >
                <FiberManualRecord style={{ color: 'green', fontSize: 20 }} />
                <p style={{ marginRight: 20 }} >{user ? user.name : null}</p>
                <Button onClick={this.signOut} color="inherit">Logout</Button>
              </span>
              :
              <Link to='/signin' style={{ color: 'white', textDecoration: 'none' }} >
                <Button color="inherit">Login</Button>
              </Link>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser]
  return {
    authedUser,
    user
  }
}

export default connect(mapStateToProps)(withStyles(styles)(NavBar))
