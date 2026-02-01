import React, { useState } from 'react'

const Batch = () => {

    const [num, setNum] = useState(10)

    const btnClicked = () => {
        setNum(prev => (prev + 1))
        setNum(prev => (prev + 1))
        setNum(prev => (prev + 1))
    }

    return (
        <div>
            <hr />
            <h1>Batch update</h1>
            <h2>{num}</h2>
            <button onClick={btnClicked}>Click</button>
        </div>
    )
}

export default Batch
