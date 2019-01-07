import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const NEW_QUESTION = 'NEW_QUESTION'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

const answerQuestion = ({ qid, answer, authedUser }) => {
  return {
    type: QUESTION_ANSWERED,
    data: { qid, answer, authedUser }
  }
}

export const handleAnswerQuestion = ({ qid, answer }) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestionAnswer({
      qid,
      answer,
      authedUser
    })
      .then(() => dispatch(answerQuestion({ qid, answer, authedUser })))
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