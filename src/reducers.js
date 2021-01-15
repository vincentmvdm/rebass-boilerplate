import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from "redux-form";

import signInReducer from "./containers/SignInPage/reducer";

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

export default function createReducer(injectedReducers) {
    return combineReducers({
        router: connectRouter(history),
        form: formReducer,
        signIn: signInReducer,
        ...injectedReducers
    });
}
