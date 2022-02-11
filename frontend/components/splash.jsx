import React from 'react'
import EventShow from './event_show'
import {Link} from 'react-router-dom'

class Splash extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            log: "",
            events: this.props.events
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleDelete= this.handleSubmit.bind(this)

    }

    componentDidMount(){
        this.props.fetchEvents()
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createEvent(this.state)
        this.props.fetchEvents()
        this.setState({log: ""})
    }

    update(field){
        return (e)=>{           
            this.setState({[field]: e.target.value})
        }
    }

    render(){

        if(!this.props.events){
            return null
        }
        return (
            <div>
                <form>
                    <textarea  cols="100" rows="10" value= {this.state.log} onChange= {this.update('log')}></textarea>
                </form>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>

                <div>

                     <ul>
                        {this.props.events.map((event, index) =>
                            <li key={event.id}>
                                {index+1+ '. Log ID:'}
                                <Link to={`/event_logs/${event.id}`}> 
                                    {`<${event.log_id}>`}
                                </Link> 
                            </li>
                        )}
                    </ul>
                    {/* {this.props.events.map(event => <EventIndex key= {event.id} event={event} />)} */}
                </div>
            </div>
        )

    }
}
export default Splash