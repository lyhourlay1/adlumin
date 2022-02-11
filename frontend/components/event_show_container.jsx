import { connect } from "react-redux";
import EventShow from "./event_show";
import {fetchEvent, deleteEvent} from "../actions/event_action"
import {createComment, deleteComment, fetchComments, updateComment} from "../actions/comment_action"

const mSTP = (state,ownProps)=> {
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        eventId: ownProps.match.params.eventId,
        comments: Object.values(state.entities.comments)
}}


const mDTP = dispatch =>({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createComment: (payload) => dispatch(createComment(payload)),
    fetchComments: (eventId) => dispatch(fetchComments(eventId)),
    deleteComment: (commentId)=> dispatch(deleteComment(commentId)),
    updateComment: (payload)=> dispatch(updateComment(payload))


})

export default connect(mSTP, mDTP)(EventShow)