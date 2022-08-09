import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            time:new Date ()
        }
    }
    tick = () =>{
        this.setState({
            time:new Date()
        })
    }
    
    componentDidMount = () =>{
        setInterval(() => this.tick(),1000)
    }
    
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;

