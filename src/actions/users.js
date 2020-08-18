export const RECEIVE_USERS = "RECEIVE_USERS"
export const ANSWER_QUESTION_USER = "ANSWER_QUESTION_USER"
export const ADD_QUESTION_USER = "ADD_QUESTION_USER"

export function recevieUsers(users){
    return {
        type : RECEIVE_USERS,
        users,
    }
} 

export function addAnswerToUser (data){
    return {
        type : ANSWER_QUESTION_USER,
        data
    }

}
export function addQuestionToUser (data){
    return {
        type : ADD_QUESTION_USER,
        data
    }

}

