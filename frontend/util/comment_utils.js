export const fetchComments = (eventId) => (
    $.ajax({
        url: `event_logs/${eventId}/comments`,
        method: 'get'
    })
);

export const fetchComment = (eventId, commentId) => (
    $.ajax({
        url: `event_logs/${eventId}/comments/${commentId}`,
        method: 'get'
    })
);

export const createComment = (comment) => {
    return  $.ajax({
        url: `event_logs/${comment.event_log_id}/comments`,
        method: 'POST',
        data: { comment }
    })
}
export const updateComment = (comment) => {
    console.log(comment)
    return  $.ajax({
        url: `event_logs/${comment.event_log_id}/comments/${comment.commentId}`,
        method: 'put',
        data: { comment }
    })
}



export const deleteComment = (commentId) => {
    return $.ajax({
        url: `comments/${commentId}`,
        method: 'DELETE'
    })
}

