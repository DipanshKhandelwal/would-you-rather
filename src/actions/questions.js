import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const NEW_QUESTION = 'NEW_QUESTION'

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

const addQuestion = (question) => {
  return {
    type: NEW_QUESTION,
    question
  }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
  }
}