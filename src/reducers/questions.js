import { RECEIVE_QUESTIONS, NEW_QUESTION } from '../actions/questions'

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.id] : action.question
      }
    default:
      return state
  }
}

export default questions