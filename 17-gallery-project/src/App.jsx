import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { scale } from 'framer-motion'
import Cards from './components/Cards'



const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)

    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])


  let printUserData = <h2 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl font-semibold'>Loading....</h2>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <Cards elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-full p-4 text-white'>


      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className=' flex justify-center gap-6 items-center p-4'>
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className='bg-amber-400 text-sm cursor:scale text-black rounded px-4 py-3 font-semibold'


          onClick={() => {

            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }

          }}
        >
          Prev
        </button>
        <h3>Page{index}</h3>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-3 font-semibold'

          onClick={() => {

            setIndex(index + 1)
            setUserData([])
          }}
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default App
