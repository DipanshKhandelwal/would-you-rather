import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'

class LeaderBoard extends React.Component {
  render() {
    const { positions, users } = this.props

    return (
      <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Card style={{ padding: 50, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#6969694a' }} >
          <h1>Leaderboard !!</h1>
          {positions.map((position, index) =>
            <div style={{ margin: 10 }} key={index} >
              <Badge badgeContent={index + 1} color="primary">
                <Card style={{ backgroundColor: '#4052b466', padding: 10, display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                  <div style={{ display: 'flex', flex: 2, flexDirection: 'column', padding: 10, margin: 10, width: '400px' }} >
                    <div style={{ display: "flex", flexDirection: 'row' }} >
                      <Avatar alt={position.id} src={users[position.id].avatarURL} style={{ height: 50, width: 50, margin: 10 }} />
                      <h2>{position.id}</h2>
                    </div>
                    <p>Answered : {Object.keys(users[position.id].answers).length}</p>
                    <p>Unaswered : {Object.keys(users[position.id].questions).length}</p>
                  </div>
                  <Card style={{ backgroundColor: '#f04d56', color: 'white', display: 'flex', flex: 1, padding: 10, paddingLeft: 10, paddingRight: 10, margin: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <h4>Score</h4>
                    <h2>{position.score}</h2>
                  </Card>
                </Card>
              </Badge>
            </div>
          )}
        </Card>
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