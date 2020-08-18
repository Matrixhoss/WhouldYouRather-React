export const RECEIVE_AUTHEDUSER = "RECEIVE_AUTHEDUSER"
export const LOGOUT_AUTHEDUSER = "LOGOUT_AUTHEDUSER"

export function receiveAuthedUser (id){
    return {
        type : RECEIVE_AUTHEDUSER,
        id
    }
} 

export function authedUserLogout (){
    return {
        type : LOGOUT_AUTHEDUSER 
        
    }
}



