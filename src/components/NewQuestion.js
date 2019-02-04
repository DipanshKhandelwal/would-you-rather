import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

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
      <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Card style={{ padding: 50, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
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
          <Button
            style={{ margin: 10, display: 'flex', flex: 1 }}
            variant="contained"
            color="secondary"
            disabled={optionOne === '' || optionTwo === ''}
            onClick={this.saveNewQuestion}
          >
            Submit
          </Button>
        </Card>
      </div>
    )
  }
}

export default withRouter(connect()(NewQuestion))