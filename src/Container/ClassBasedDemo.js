import React, { Component } from 'react';

class ClassBasedDemo extends Component {
    constructor(props){
        super(props);

        this.state = {
            cityname: 'Surat'
        }
    }

    cityname = () => {
        this.setState({
            cityname: 'baroda'
        })
    }


    render() {
        return (
            <div>
                <p>{this.state.cityname}</p>
                <button onClick={() => this.cityname()}>cityname</button>
            </div>
        );
    }
}

export default ClassBasedDemo;