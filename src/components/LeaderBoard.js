import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
  render() {
    const { positions } = this.props

    return (
      <div>
        {positions.map((position) => 
            <div>
              {position.id} - {position.score}
            </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users)
  const positions = userIds.map((id) => ({
    id,
    score: 
      Object.keys(users[id].answers).length +
      Object.keys(users[id].questions).length 
  }))

  return {
    users,
    positions: positions.sort((a, b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(LeaderBoard)