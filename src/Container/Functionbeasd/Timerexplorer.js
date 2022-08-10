// import React, { Component } from 'react'

// class Timer8 extends Component {

//     constructor(props) {
//         super(props);


//         this.state = {
//             Time: new Date()
//         }
//     }

//     tick = () => {
//         this.setState({
//             Time: new Date()
//         })
//     }

//     componentDidMount = () => {
//         this.Time = setInterval(() => this.tick(), 1000)
//     }



//     componentDidUpdate = (Newprops, prevstate) => {
//         if (prevstate.Time !== this.state.Time) {
//             console.log("componentDidUpdate");
//         }
//     }


//     componentWillUnmount = () => {
//         clearInterval(this.Time);
//     }


//     render() {
//         return (
//             <div>
//                 <p>{this.state.Time.toLocaleTimeString()}</p>
//             </div>
//         )
//     }
// }

// export default Timer8;


// ==============================function===========================================


// import React, { useEffect, useState } from 'react';

// function Timefun(props) {
//     const [time , settime] =useState(new Date());

//     const tick = () => {
//         settime (new Date())
//     }

//     useEffect (() => {
//         let timed = setInterval(() => tick() , 1000)
//         console.log("componentdidmounte");

//         return() => {
//             clearInterval(timed)
//         }
//     }, [time])
    
//     return (
//         <div>
//             <p>{time.toLocaleTimeString()}</p>
//         </div>
//     );
// }

// export default Timefun;