import React from 'react'
import Card from '@material-ui/core/Card'
import LinearProgress from '@material-ui/core/LinearProgress'
import Badge from '@material-ui/core/Badge'

const PollResults = (props) => {

  const { optionOneVotes, optionTwoVotes, optionOneText, optionTwoText, selected } = props
  let win = null
  if (optionOneVotes > optionOneVotes) win = 1
  else if (optionOneVotes < optionOneVotes) win = 2
  else win = 0

  return (
    <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
      <Card style={{ backgroundColor: '#4052b466', padding: 10, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h2>Results</h2>
        <div style={{ margin: 15 }} >
          <Badge badgeContent={win == 1 ? "Win" : "Draw"} color="primary">
            <Card style={{ backgroundColor: selected == 'optionOne' ? "pink" : "null", display: 'flex', flex: 1, flexDirection: 'column', padding: 20, width: '300px' }} >
              <h3>{optionOneText}</h3>
              <p>{optionOneVotes} out of {optionOneVotes + optionTwoVotes}</p>
              <LinearProgress variant="determinate" color="secondary" value={optionOneVotes * 100 / (optionOneVotes + optionTwoVotes)} />
            </Card>
          </Badge>
        </div>
        <div style={{ margin: 15 }} >
        <Badge badgeContent={win == 2 ? "Win" : "Draw"} color="primary">
          <Card style={{ backgroundColor: selected == 'optionTwo' ? "pink" : "null", display: 'flex', flex: 1, flexDirection: 'column', padding: 20, width: '300px' }} >
            <h3>{optionTwoText}</h3>
            <p>{optionTwoVotes} out of {optionOneVotes + optionTwoVotes}</p>
            <LinearProgress variant="determinate" color="secondary" value={optionTwoVotes * 100 / (optionOneVotes + optionTwoVotes)} />
          </Card>
        </Badge>
        </div>
      </Card>
    </div >
  )
}

export default PollResults