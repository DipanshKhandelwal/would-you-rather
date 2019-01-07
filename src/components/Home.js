import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {

    const { questionsIds, users, authedUser, questions } = this.props

    return (
      <ul>{
        questionsIds.map((id) => {
          return (
            <li key={id}>
              <h2>Question by {users[questions[id].author].name}</h2>
              <Link to={`/question/${id}`} >{id}</Link>
              - {Object.keys(users[authedUser].answers).includes(id) ? 'answered' : 'unanswered'}
              - <Link to={`/question/${id}`} >View poll</Link>
            </li>
          )
        })
      }</ul>
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