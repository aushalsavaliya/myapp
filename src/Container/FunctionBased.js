import React, { useState } from 'react';

function FunctionBased(props) {
    const [cityName , setcityname] = useState('surat');
    const changrcity = () => {
        setcityname ('baroda')
    }
    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changrcity()}>changrcity</button>
        </div>
    );
}

export default FunctionBased;