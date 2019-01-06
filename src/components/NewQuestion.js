import React from 'react'

class NewQuestion extends React.Component {

  state = {
    optionOne: '',
    optionTwo: ''
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div>
        <h1>New Question</h1>
        <h4>Complete the question:</h4>
        <h2>Would you rather ...</h2>
        <input
          type='text' value={optionOne}
          onChange={(e) => this.setState({ optionOne: e.target.value })}
          placeholder='Enter option one text here'
        />
        <h2>or</h2>
        <input
          type='text' value={optionTwo}
          onChange={(e) => this.setState({ optionTwo: e.target.value })}
          placeholder='Enter option two text here'
        />
      </div>
    )
  }
}

export default NewQuestion