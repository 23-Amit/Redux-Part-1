import counterReducer from "./Counter";
import IsLogged from "./IsLogged";

import {combineReducers} from 'redux'

const reducers = combineReducers({
    counterReducer,
    IsLogged
})

export default reducers