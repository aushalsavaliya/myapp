import React, { Component } from 'react';


class ClassBasedDemo extends Component {


    constructor(props){
        super(props);
        this.state = {
            countryname: 'pakistan'
        }
    }
    countryname = () => {
        this.setState({
            countryname: 'Balochistan'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.countryname}</p>
                <button onClick={() => this.countryname()}>Countryname</button>
            </div>
        );
    }
}

export default ClassBasedDemo;
