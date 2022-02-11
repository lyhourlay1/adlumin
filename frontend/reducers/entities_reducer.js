import { combineReducers } from 'redux'
import eventReducer from './event_reducer'
import commentReducer from './comment_reducer'

export default combineReducers({
    events: eventReducer,
    comments: commentReducer
})