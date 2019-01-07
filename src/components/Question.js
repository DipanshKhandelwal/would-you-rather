import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'
import PollResults from './PollResults'
import PollForm from './PollForm'

class Question extends React.Component {

  submitAnswer = ({ answer }) => {
    const { dispatch, id } = this.props
    dispatch(handleAnswerQuestion({ qid: id, answer }))
  }

  render() {
    const { users, authedUser, questions, id } = this.props
    const status = Object.keys(users[authedUser].answers).includes(id) ? 'answered' : 'unanswered'
    const optionOneVotes = questions[id].optionOne.votes.length
    const optionOneText = questions[id].optionOne.text
    const optionTwoVotes = questions[id].optionTwo.votes.length
    const optionTwoText = questions[id].optionTwo.text

    return (
      <div>
        <p>Question - {id}</p>
        <p>{status}</p>
        {status === 'answered'
          ? <PollResults
            optionOneVotes={optionOneVotes}
            optionTwoVotes={optionTwoVotes}
            optionOneText={optionOneText}
            optionTwoText={optionTwoText}
          />
          : <PollForm
            optionOneText={optionOneText}
            optionTwoText={optionTwoText}
            submitAnswer={this.submitAnswer}
          />
        }
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