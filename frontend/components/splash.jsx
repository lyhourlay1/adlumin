import React from 'react'

class Splash extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit= this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <form>
                    <textarea  cols="100" rows="10"></textarea>
                </form>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        )

    }
}
export default Splash