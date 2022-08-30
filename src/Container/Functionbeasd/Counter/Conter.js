import React, { useState } from 'react';

function Conter(props) {

    const [counter , setcounter] = useState(0)

    const Increment =() =>{
        if (counter < 5) {
            setcounter (counter+1);
        }
    }

    const Decrement = () =>{
        if (counter > 0) {
            setcounter (counter-1);
        }
    }

    return (
        <div>
            <button onClick={() => Increment()}>+</button>
            <span>{counter}</span>
            <button onClick={() => Decrement()}>-</button>
        </div>
    );
}

export default Conter;