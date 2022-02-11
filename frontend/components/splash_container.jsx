import { connect } from "react-redux";
import Splash from "./splash";
import {fetchEvents, fetchEvent, createEvent, deleteEvent} from "../actions/event_action"

const mSTP = (state,ownProps)=> {
    return {
        events: Object.values(state.entities.events),
}}


const mDTP = dispatch =>({
    fetchEvents: ()=> dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    createEvent: event_log=> dispatch(createEvent(event_log)),
})

export default connect(mSTP, mDTP)(Splash)