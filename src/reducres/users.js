import {RECEIVE_USERS ,ANSWER_QUESTION_USER ,ADD_QUESTION_USER} from '../actions/users'



export default function users (state = {} , action){
    switch(action.type){
        case RECEIVE_USERS : return {...state , ...action.users}

        case ANSWER_QUESTION_USER :
            const { authedUser, qid, answer } = action.data;
            return {
                ...state,
                    [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                     }
                 }
            }

        case ADD_QUESTION_USER : 
            const {user ,id} =action.data
            return {
                ...state,
                [user]: {
                  ...state[user],
                  questions: state[user].questions.concat([id])
                }
              }


        default : return state
    }
}