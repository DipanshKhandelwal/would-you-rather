import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
  render() {
    return (
      <div>
        LeaderBoard
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard)