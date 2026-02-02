import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { h2 } from 'framer-motion/client'
import CallingFetch from './components/CallingFetch'
import AxiosCalling from './components/AxiosCalling'

const App = () => {


  return (
    <div>
        
      <AxiosCalling/>
      <CallingFetch/>
    </div>
  )
}

export default App
