import React from 'react'

const InputChangeFun = () => {
    // function inputChanging(){
    //     console.log("user is typing");  
    // }

    function inputChanging(val){
        console.log(val);
        
    }

    return (
        // <div>
        //   <input onChange={inputChanging} type="text" placeholder='Enter something' />
        // </div>

        <div>
            <input
                onChange={function (elem) {

                    inputChanging(elem.target.value)

                    // console.log(elem);

                    // console.log(elem.target);
                    // console.log(elem.target.value);
                }}
                type="text"
                placeholder='Enter something' />
        </div>
    )
}

export default InputChangeFun
