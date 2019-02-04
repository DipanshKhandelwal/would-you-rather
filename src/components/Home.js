import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  state = {
    tab: 0
  }

  handleChange = (event, value) => {
    this.setState({ tab: value });
  }

  render() {
    const { questionsIds, users, authedUser, questions } = this.props
    const { tab } = this.state

    return (
      <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Card style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <AppBar position="static" style={{ display: 'flex', flex: 1, justifyContent: 'center' }} >
            <Tabs value={tab} onChange={this.handleChange} style={{ display: 'flex', flex: 1, justifyContent: 'center' }} >
              <Tab label="Answered" />
              <Tab label="Unanswered" />
            </Tabs>
          </AppBar>
          {tab === 0 &&
            <ul style={{ padding: 0 }} >{
              questionsIds.map((id) => {
                if (Object.keys(users[authedUser].answers).includes(id)) {
                  return (
                    <Card key={id} style={{ padding: 10, margin: 10, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                      <h2>{users[questions[id].author].name} asks ... </h2>
                      ... {questions[id].optionOne.text} ... Or
                      <Link to={`/question/${id}`} style={{ textDecoration: 'none' }} >
                        <Button style={{ margin: 10, display: 'flex', flex: 1 }} variant="contained" color="secondary" >View Poll</Button>
                      </Link>
                    </Card>
                  )
                }
              })
            }</ul>
          }
          {tab === 1 &&
            <ul style={{ padding: 0 }} >{
              questionsIds.map((id) => {
                if (!Object.keys(users[authedUser].answers).includes(id)) {
                  return (
                    <Card key={id} style={{ padding: 10, margin: 10, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                      <h2>{users[questions[id].author].name} asks ... </h2>
                      ... {questions[id].optionOne.text} ... Or
                      <Link to={`/question/${id}`} style={{ textDecoration: 'none' }} >
                        <Button style={{ margin: 10, display: 'flex', flex: 1 }} variant="contained" color="secondary" >View Poll</Button>
                      </Link>
                    </Card>
                  )
                }
              })
            }</ul>
          }

        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questionsIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    users,
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(Home)