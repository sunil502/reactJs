import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-9 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full text-xl font-semibold h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-xl leading-relaxed mb-8  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum distinctio nemo voluptate quo doloremque? </p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-2 rounded-full'> <i className="ri-arrow-right-fill "></i></button>
            </div>
        </div>
        
      </div>
  )
}

export default RightCardContent
