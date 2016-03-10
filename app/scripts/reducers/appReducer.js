import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'


const appReducers = combineReducers({ todosReducer, visibilityFilterReducer });

export default appReducers
