export const fetchEvents = () => (
    $.ajax({
        url: `event_logs/`,
        method: 'get'
    })
);

export const fetchEvent = eventId => (
    $.ajax({
        url: `event_logs/${eventId}/`,
        method: 'get'
    })
);

export const createEvent = event_log => (
    $.ajax({
        url: `event_logs/`,
        method: 'POST',
        data: { event_log }
    })
);


export const deleteEvent = eventId => (
    $.ajax({
        url: `event_logs/${eventId}/`,
        method: 'DELETE'
    })
)