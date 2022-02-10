export const fetchEvents = () => (
    $.ajax({
        url: `api/event_logs/`,
        method: 'get'
    })
);

export const fetchEvent = eventId => (
    $.ajax({
        url: `/api/event_logs/${eventId}/`,
        method: 'get'
    })
);

export const createEvent = event => (
    $.ajax({
        url: `api/event_logs/`,
        method: 'POST',
        data: { event }
    })
);


export const deleteEvent = eventId => (
    $.ajax({
        url: `/api/event_logs/${eventId}/`,
        method: 'DELETE'
    })
)