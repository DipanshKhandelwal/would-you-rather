import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends React.Component {
  render() {
    return (
      <div>
        Question - {this.props.id}
      </div>
    )
  }
}

const mapStateToProps = ({ questions }, props) => {
  const { id } = props.match.params
  return {
    id
  }
}

export default withRouter(connect(mapStateToProps)(Question))