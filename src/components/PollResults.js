import React from 'react'

const PollResults = (props) => {

  const { optionOneVotes, optionTwoVotes, optionOneText, optionTwoText } = props

  return (
    <div>
      <h3>Results</h3>
      <p>{optionOneText} - {optionOneVotes} out of {optionOneVotes + optionTwoVotes}</p>
      <p>{optionTwoText} - {optionTwoVotes} out of {optionOneVotes + optionTwoVotes}</p>
    </div>
  )
}

export default PollResults