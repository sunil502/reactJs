import { Bold } from 'lucide-react';
import React, { useState } from 'react'

const IncAndDec = () => {

    const [num, setNum] = useState(0)

    function increaseNum() {
        setNum(num + 1);
    }
    function decreaseNum() {
        setNum(num - 1);
    }
    function jump5Num() {
        setNum(num + 5);
    }

    return (
        <div>
            <hr />
            <h1>Increse and Decrease using button</h1>
            <div className='main'>
                <h1>{num}</h1>
                <button onClick={increaseNum}>Increase</button>
                <button onClick={decreaseNum}>Decrease</button>
                <button onClick={jump5Num} >Increase by 5</button>
            </div>
        </div>
    )
}

export default IncAndDec
