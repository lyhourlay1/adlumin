import React from 'react'

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            content: "",
            event_log_id: this.props.eventId
        }

        this.handleAddComment = this.handleAddComment.bind(this)

    }

    update(field){
        return (e)=>{           
            this.setState({[field]: e.target.value})
        }
    }

    handleAddComment(e){
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({content: ""})
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.content} onChange={this.update('content')}/>
                <button onClick={this.handleAddComment} > Add Comment </button>
            </div>
    
        )
    }
}

export default CommentForm