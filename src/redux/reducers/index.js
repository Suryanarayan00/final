import { combineReducers } from 'redux';
import auth from "./auth";
import appTheme from "./appTheme";
import types from '../types';
import shopping from './shopping';



const appReducer = combineReducers({
    auth,
    shopping,
    appTheme

});

const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;