import React from 'react'
import Card from '@material-ui/core/Card'

const PollResults = (props) => {

  const { optionOneVotes, optionTwoVotes, optionOneText, optionTwoText } = props

  return (
    <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
      <Card style={{ padding: 50, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h3>Results</h3>
        <p>{optionOneText} - {optionOneVotes} out of {optionOneVotes + optionTwoVotes}</p>
        <p>{optionTwoText} - {optionTwoVotes} out of {optionOneVotes + optionTwoVotes}</p>
      </Card>
    </div>
  )
}

export default PollResults