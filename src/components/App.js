import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import SignIn from './SignIn'
import NavBar from './Navbar'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import NotFound from './NotFound'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { users, questions } = this.props
    const loading = users === null || questions === null

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading
            ? null
            : <div>
              <NavBar />
              <Switch>
                <Route path='/signin' component={SignIn} />
                <Route path='/notfound' component={NotFound} />
                <Route exact path="/leaderboard"
                  render={() => (
                    this.props.authedUser
                      ? <LeaderBoard />
                      : <Redirect to="/signin" />
                  )}
                />
                <Route exact path="/question/:id"
                  render={() => (
                    this.props.authedUser
                      ? <Question />
                      : <Redirect to="/signin" />
                  )}
                />
                <Route exact path="/add"
                  render={() => (
                    this.props.authedUser
                      ? <NewQuestion />
                      : <Redirect to="/signin" />
                  )}
                />
                <Route exact path="/"
                  render={() => (
                    this.props.authedUser
                      ? <Redirect to="/home" />
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
                <Route
                  render={() => (
                    <NotFound />
                  )}
                />
              </Switch>
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(App)