
import {answerQuestion ,addQuestion ,receiveQuestions} from './questions'
import {addAnswerToUser,recevieUsers ,addQuestionToUser} from './users'
import {answerQuestionAPI,saveQuestionAPI,getInitialData} from '../utils/API'
import {showLoading, hideLoading} from "react-redux-loading-bar"
import {startLoading ,stopLoading} from './loader'


export function handleInitialData () {
    return (dispatch)=>{
        dispatch(showLoading())
        getInitialData().then(({users , questions}) => {
            dispatch(recevieUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }

}

export function handleAnswerQuestion (authedUser ,qid ,answer){
    return (dispatch) => {
        dispatch(startLoading())
        answerQuestionAPI({authedUser ,qid ,answer})
        .then(() => {
            dispatch(addAnswerToUser({authedUser , qid , answer}))
            dispatch(answerQuestion({authedUser , qid , answer}))
            dispatch(stopLoading())
        })
       
    }
}
export function handleAddQuestion (optionOneText , optionTwoText , author){  
    return (dispatch) => {
        dispatch(startLoading())
        saveQuestionAPI({optionOneText , optionTwoText , author})
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser({id:question.id , user:question.author}))
            dispatch(stopLoading())
        })
    }
}