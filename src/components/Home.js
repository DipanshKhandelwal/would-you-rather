import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {

    const { questionsIds } = this.props

    return (
      <ul>{
        questionsIds.map((id) =>
          <li key={id} >{id}</li>
        )
      }</ul>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questionsIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)