import React, { Component } from 'react'


class click extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            message :''
        }
    }
    
clicked=()=>{
    this.setState({
        message:'Submitted Successfully'
    })

}
    render() {
        return (
            <div>
                <button onClick={this.clicked} >Submit</button>
                <h6>{this.state.message}</h6>
            </div>
        )
    }
}

export default click
