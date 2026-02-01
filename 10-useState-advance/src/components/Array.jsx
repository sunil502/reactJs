import React, { useState } from 'react'

const Array = () => {

    const [num, setNum] = useState([10, 20, 30])

    const btnClicked = () => {
        const newNum = [...num]
        newNum.push(99)

        setNum(newNum);
    }


    return (
        <div>
            <h1>Array update</h1>
            <h2>{num}</h2>
            <button onClick={btnClicked}>Click</button>
        </div>
    )
}

export default Array
