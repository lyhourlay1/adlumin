import React from 'react'
import CommentForm from './comment_form'

class EventShow extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            content: "",
            event_log_id: this.props.eventId,
            commentId : ""
        }
       
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRemoveComment = this.handleRemoveComment.bind(this)
        this.handleUpdateComment = this.handleUpdateComment.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
    }
    handleGoBack(){
        this.props.history.push('/')
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.eventId)
        this.props.fetchComments(this.props.eventId)
    }

    handleDelete(e){
        e.preventDefault()
        this.props.deleteEvent(this.props.eventId)
        this.props.history.push(`/`)
    }
    handleRemoveComment(e){
        this.props.deleteComment(e.target.value)
    }

    handleUpdateComment(e){
        this.setState({commentId: e.target.value}, ()=>this.props.updateComment(this.state))
    }
    update(field){
        return (e)=>{           
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        if (!this.props.event) return null
        return(
            <div> 
                <button onClick={this.handleGoBack}>Go Back To The Main Page</button>
                <br />
                {'<'+this.props.event.log_id+ '>'} 
                <button onClick={this.handleDelete}> DELETE</button>
                <br></br>
                {' Source_IP: '}
                {this.props.event.source_IP}
                <br></br>
                {' Destination_IP: '}
                {this.props.event.destination_IP}
                <br></br>
                {' Source Valid?: '}
                {this.props.event.source_valid.toString()}
                <br></br>
                {' Destination Valid?: '}
                {this.props.event.destination_valid.toString()}
                <br></br>
                {' Source Private?: '}
                {this.props.event.source_private.toString()}
                <br></br>
                {' Destination Private?: '}
                {this.props.event.destination_private.toString()}
                <br></br>
                

                <br />
                {'Comments:'}
                <br />
                {this.props.comments.map(comment=>
                    <li key= {comment.id} className='comment-list'>{comment.content} 
                        <button onClick={this.handleRemoveComment} value={comment.id}> Delete</button>
                        <div></div>
                        <input type="text" onChange={this.update('content')}/>
                        <button onClick={this.handleUpdateComment} value= {comment.id}> Edit</button>
                    </li>
                )}
                <br />
                <CommentForm eventId= {this.props.eventId} createComment={this.props.createComment}/>

            </div>

        )
    }
}export default EventShow