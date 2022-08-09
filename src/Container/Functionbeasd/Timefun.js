import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const [time , settime] =useState(new Date());

    const tick = () => {
        settime (new Date())
    }

    useEffect (() => {
        let timed = setInterval(() => tick() , 1000)
        console.log("componentdidmounte");

        return() => {
            clearInterval(timed)
        }
    }, [time])
    
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timefun;