// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component{

    buttonClick = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    render() { 
        return(
            <button onClick={this.buttonClick}>I'm a Button! </button>
        )
    }
}
export default CoordinatesButton;