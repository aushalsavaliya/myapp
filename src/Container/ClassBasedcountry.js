import React, { Component } from 'react';


class ClassBasedDemo extends Component {


    constructor(props){
        super(props);
        this.state = {
            cityname: 'pakistan'
        }
    }
    countryname = () => {
        this.setState({
            cityname: 'Balochistan'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityname}</p>
                <button onClick={() => this.countryname()}>Countryname</button>
            </div>
        );
    }
}

export default ClassBasedDemo;
