import {RECEIVE_AUTHEDUSER ,LOGOUT_AUTHEDUSER} from '../actions/authedUser'

export default function authedUser(state =null , action){
    switch(action.type){
        case RECEIVE_AUTHEDUSER : return action.id
        case LOGOUT_AUTHEDUSER : return null
        default : return state
    }
}