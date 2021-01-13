// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

    delayClick = (event) => { 
        event.persist()
        // const target = event.target
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
    render() {
        return (
            <div>
            <button onClick={this.delayClick}> I'm The Delay Button!</button>    
            </div>
        )
    }
}

export default DelayedButton;
