import React, { Component } from 'react';


class ClassBasedcountry extends Component {


    constructor(props) {
        super(props);
        this.state = {
            countryname: 'pakistan'
        }
    }

    countryname(props) {
        this.setState({
            countryname: 'Balochistan'
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.countryname}</p>
              <button onClick={() => this.countryname()}>Countryname</button>
            </div>
        )
    }
}






export default ClassBasedcountry;
