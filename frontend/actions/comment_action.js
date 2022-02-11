import * as CommentApiUtil from "../util/comment_utils"

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchComments = (eventId) => dispatch => (
    CommentApiUtil.fetchComments(eventId)
        .then(comments => dispatch(receiveComments(comments)))
);

export const fetchComment = commentId => dispatch => (
    CommentApiUtil.fetchComment(commentId)
        .then(comment  => dispatch(receiveComment(comment)))
);

export const createComment = payload => dispatch => (
    CommentApiUtil.createComment(payload)
        .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    CommentApiUtil.deleteComment(commentId)
        .then((commentId) => dispatch(removeComment(commentId)))
);

export const updateComment = (payload)=> dispatch =>(
    CommentApiUtil.updateComment(payload)
    .then(comment=> dispatch(receiveComment(comment)))
)