import * as EventApiUtil from "../util/event_utils"

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

const receiveEvent = event_log => ({
    type: RECEIVE_EVENT,
    event_log
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
        .then(event_log  => dispatch(receiveEvent(event_log)))
);

export const createEvent = event_log => dispatch => (
    EventApiUtil.createEvent(event_log)
        .then(event_log => dispatch(receiveEvent(event_log)))
);

export const deleteEvent = eventId => dispatch => (
    EventApiUtil.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)))
);