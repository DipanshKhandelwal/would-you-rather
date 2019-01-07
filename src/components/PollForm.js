import React from 'react'

class PollForm extends React.Component {

  state = {
    selected: 'optionOne'
  }

  handleOptionChange = (e) => {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    const { optionOneText, optionTwoText, submitAnswer } = this.props
    const { selected } = this.state

    return (
      <div>
        <h3>Would you rather ...</h3>
        <label>
          <input type="radio"
            value="optionOne"
            checked={selected === 'optionOne'}
            onChange={this.handleOptionChange}
          />
          {optionOneText}
        </label>
        <label>
          <input type="radio"
            value="optionTwo"
            checked={selected === 'optionTwo'}
            onChange={this.handleOptionChange}
          />
          {optionTwoText}
        </label>
        <button onClick={() => submitAnswer({answer: selected})} >Submit</button>
      </div>
    )
  }
}

export default PollForm