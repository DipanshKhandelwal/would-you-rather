import { RECEIVE_QUESTIONS, NEW_QUESTION, QUESTION_ANSWERED } from '../actions/questions'

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
        [action.question.id]: action.question
      }
    case QUESTION_ANSWERED:
      return {
        ...state,
        [action.data.qid]: {
          ...state[action.data.qid],
          [action.data.answer]: {
            ...state[action.data.qid][action.data.answer],
            votes: state[action.data.qid][action.data.answer].votes.concat([action.data.authedUser])
          }
        }
      }
    default:
      return state
  }
}

export default questions