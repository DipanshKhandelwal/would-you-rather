import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends React.Component {

  state = {
    optionOne: '',
    optionTwo: ''
  }

  saveNewQuestion = () => {
    const { optionTwo, optionOne } = this.state
    const { dispatch } = this.props
    dispatch(handleAddQuestion(optionOne, optionTwo))
    this.setState({ optionOne: '', optionTwo: '' })
    this.props.history.push('/home')
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
        <button onClick={this.saveNewQuestion} disabled={optionOne === '' || optionTwo === ''} >
          Submit
        </button>
      </div>
    )
  }
}

export default withRouter(connect()(NewQuestion))