import * as EventApiUtil from "../util/event_utils"

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
});

export const fetchEvents = () => dispatch => (
    EventApiUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = eventId => dispatch => (
    EventApiUtil.fetchEvent(eventId)
        .then(event  => dispatch(receiveOrder(event)))
);

export const createEvent = event => dispatch => (
    EventApiUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
);

export const deleteEvent = eventId => dispatch => (
    EventApiUtil.deleteOrder(eventId)
        .then(() => dispatch(removeOrder(eventId)))
);