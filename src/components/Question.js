import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'
import PollResults from './PollResults'
import PollForm from './PollForm'
import Card from '@material-ui/core/Card'

class Question extends React.Component {

  submitAnswer = ({ answer }) => {
    const { dispatch, id } = this.props
    dispatch(handleAnswerQuestion({ qid: id, answer }))
  }

  render() {
    const { users, authedUser, questions, id } = this.props
    const status = Object.keys(users[authedUser].answers).includes(id) ? 'answered' : 'unanswered'
    let selected = null
    if(status == 'answered') {
      selected = users[authedUser].answers[id]
    }
    const optionOneVotes = questions[id].optionOne.votes.length
    const optionOneText = questions[id].optionOne.text
    const optionTwoVotes = questions[id].optionTwo.votes.length
    const optionTwoText = questions[id].optionTwo.text

    return (
      <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Card style={{ backgroundColor: '#6969694a', padding: 20, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <h2>{users[questions[id].author].name} asks ... </h2>
          {status === 'answered'
            ? <PollResults
              optionOneVotes={optionOneVotes}
              optionTwoVotes={optionTwoVotes}
              optionOneText={optionOneText}
              optionTwoText={optionTwoText}
              selected={selected}
            />
            : <PollForm
              optionOneText={optionOneText}
              optionTwoText={optionTwoText}
              submitAnswer={this.submitAnswer}
            />
          }
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  return {
    id,
    questions,
    users,
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(Question))