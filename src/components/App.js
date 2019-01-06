import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import SignIn from './SignIn'
import NavBar from './Navbar'
import LeaderBoard from './LeaderBoard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route path='/signin' component={SignIn} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route exact path="/"
            render={() => (
              this.props.authedUser
                ? <Home />
                : <Redirect to="/signin" />
            )}
          />
          <Route exact path="/home"
            render={() => (
              this.props.authedUser
                ? <Home />
                : <Redirect to="/signin" />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)