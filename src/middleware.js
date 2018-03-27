import { agent } from "./agent";
import { ASYNC_START, ASYNC_END, LOGIN, LOGOUT, REGISTER} from './constants/actionTypes';

const promiseMiddleware = store => next => action => {
    if(isPomise(action.payload)) {
        store.dispatch({type: ASYNC_START, subtype: action.type});

        const currentView = store.getState().viewChangeCounter;
        
    }
}