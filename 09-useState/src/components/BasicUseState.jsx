import React, { useState } from "react"

const BasicUseState = () => {


    const [userName, setUserName] = useState('Sunil');
    const [num, setNum] = useState(0);
    const [user, setUser] = useState([10,20,30])

    function changeNum() {
        setNum(30);
        setUserName("Sunil Maurya");
        setUser([30, 40, 50])
    }

    return (
        <div>
            <h1>Name of user is {userName} <br /> Value of num is {num} <br />Array is {user}</h1>
            <button onClick={changeNum}>Click</button>
        </div>
    )
}

export default BasicUseState
