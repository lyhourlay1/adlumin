
import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_action'

const eventReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_EVENT:
            newState[action.event.id] = action.event
            return newState
        case RECEIVE_EVENTS:
            return action.events
        case REMOVE_EVENT:
            delete newState[action.eventId]
            return newState
        default:
            return state;
    }
}

export default eventReducer