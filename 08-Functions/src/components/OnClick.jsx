import React from 'react'

const OnClick = () => {

    function btnClicked(){
        console.log("Button is clicked");
    }

  return (
    <div>
      <button onClick={btnClicked}>Click me</button>
      <button onClick={btnClicked}>Explore me</button>
    </div>
  )
}

export default OnClick
