import React, { useState } from 'react';

function City(props){
    const [cityName , setcityName] = useState('surat');
    const changrcity = () => {
        setcityName ('baroda')
    }
    return (
        <div>
            {
                props.counrty_name === 'india' ? <p>taj mahel</p> : <p>london eye</p>
            }
            <p>{cityName}</p>
            <button onClick={() => changrcity()}>changrcity</button>
        </div>
    );
}

    

export default City;
