import React, { useState } from 'react';
import Reactfees from './Fees';

function Cours(props) {

    const [coursname , setcoursname] = useState('react');
    const Changecours = () => {
        setcoursname ('html')
    }
    return (
        <div>
            <p>{coursname}</p>
            <button onClick={() => Changecours()}>Changecours</button>
            <Reactfees React_name = {coursname}/> 
        </div>
    );
}

export default Cours;