import React from 'react'

const Scroll = () => {

    const pageScrolling=(elem)=>{
        if(elem>0){
            console.log("seedha scrolling");
        }
        else{
            console.log("ultha scrolling");
        }
        
    }

  return (
    <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)}}>
      <div className="page1" ></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default Scroll
