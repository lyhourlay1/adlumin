
import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_action'

const eventReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)
        // console.log('newstate', action.events)
        // console.log('state',state)
    switch (action.type) {
        case RECEIVE_EVENT:
            newState[action.event_log.id] = action.event_log
            return newState
        case RECEIVE_EVENTS:
            return action.events
        case REMOVE_EVENT:
            delete newState[action.eventId]
            return newState
        default:
            // console.log('newstate',newState)
            // console.log('state',state)
            return state;
    }
}

export default eventReducer