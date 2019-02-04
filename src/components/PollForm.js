import React from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

class PollForm extends React.Component {

  state = {
    selected: 'optionOne'
  }

  handleChange = event => {
    this.setState({ selected: event.target.value });
  };


  render() {
    const { optionOneText, optionTwoText, submitAnswer } = this.props
    const { selected } = this.state

    return (
      <div style={{ padding: 15, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Card style={{ backgroundColor: '#4052b466', padding: 50, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <h3>Would you rather ...</h3>
          <FormControl component="fieldset" >
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={this.state.selected}
              onChange={this.handleChange}
            >
              <FormControlLabel value="optionOne" control={<Radio />} label={optionOneText} />
              <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwoText} />
            </RadioGroup>
          </FormControl>
          <Button
            style={{ margin: 10, display: 'flex', flex: 1 }}
            variant="contained"
            color="secondary"
            onClick={() => submitAnswer({ answer: selected })}>
            Submit
          </Button>
        </Card>
      </div>
    )
  }
}

export default PollForm