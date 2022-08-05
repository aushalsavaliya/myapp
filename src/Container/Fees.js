import React, { useState } from 'react';

function Fees(props){
    const [coursname , setcoursName] = useState('surat');
    const changcours = () => {
        setcoursName('html')
    }
    return (
        <div>
            {
                props.React_name === 'react' ? <p>50000</p> : <p>15000</p> 
            }
            <p>{coursname}</p>
            <button onClick={() => changcours()}>changrcurs</button>
        </div>
    );
}

    

export default Fees;