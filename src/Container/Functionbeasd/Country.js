import React, { useState } from 'react';
import City from './City';

function country(props) {

    const [country , setcountryname] = useState('india');
    const Changecountry = () => {
        setcountryname ('uk')
    }
    return (
        <div>
            <p>{country}</p>
            <button onClick={() => Changecountry()}>changecountry</button>
            <City counrty_name = {country}/>
        </div>
    );
}

export default country; 
