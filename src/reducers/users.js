import { RECEIVE_USERS } from '../actions/users'
import { NEW_QUESTION, QUESTION_ANSWERED } from '../actions/questions'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    case QUESTION_ANSWERED:
      return {
        ...state,
        [action.data.authedUser]: {
          ...state[action.data.authedUser],
          answers: {
            ...state[action.data.authedUser].answers,
            [action.data.qid]: action.data.answer
          }
        }
      }
    default:
      return state
  }
}

export default users