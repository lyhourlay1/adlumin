import { combineReducers } from 'redux'
import eventReducer from './event_reducer'

export default combineReducers({
    events: eventReducer,
})