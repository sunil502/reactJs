import React from 'react'

const CallingFetch = () => {

     async function getData(){
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response);

    const getData=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    
    const data=await response.json();
    console.log(data);
    
  }

}
  return (
    <div>
      <button onClick={getData} >fetch Get Data</button>

    </div>
  )
}

export default CallingFetch
