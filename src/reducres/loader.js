import {START_LOADING ,STOP_LOADING} from '../actions/loader'

export default function loader(state = false , action){

    switch(action.type){
        case START_LOADING : return true
        case STOP_LOADING : return false
        default : return false
    }

}