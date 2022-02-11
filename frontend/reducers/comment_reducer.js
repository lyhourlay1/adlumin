import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action'

const commentReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)
        // console.log('newstate', action.events)
        // console.log('state',state)
    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState
        case RECEIVE_COMMENTS:
            return action.comments
        case REMOVE_COMMENT:
            debugger
            // console.log(newState)
            // delete newState[Object.keys(action.commentId)[0]]
            // console.log(newState)
            return action.commentId
        default:
            // console.log('newstate',newState)
            // console.log('state',state)
            return state;
    }
}

export default commentReducer