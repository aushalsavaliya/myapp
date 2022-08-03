import React, { useState } from 'react';

function Functioncountry(props) {
    const [country , setcountryname] = useState('india');
    const changecountry = () => {
        setcountryname ('uk')
    }
    return (
        <div>
            <p>{country}</p>
            <button onClick={() => changecountry()}>changecountry</button>
        </div>
    );
}

export default Functioncountry;