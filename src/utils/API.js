import {_getQuestions ,
  _getUsers ,
 _saveQuestion ,
   _saveQuestionAnswer
} from './_DATA'


export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
      ]).then(([users, questions]) => ({
        users,
        questions,
      }))
}

export function answerQuestionAPI({authedUser , qid , answer}){
  return _saveQuestionAnswer({authedUser ,qid ,answer})
  
}

export function saveQuestionAPI ({optionOneText ,optionTwoText ,author}){
  return _saveQuestion({optionOneText ,optionTwoText ,author})
}