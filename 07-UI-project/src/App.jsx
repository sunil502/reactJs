import React from 'react'
import Section1 from './components/Section1/Section1'
import { color } from 'chart.js/helpers'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'blue',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1679936310279-c0819007840c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      color:'lightseagreen',
      tag: 'Underserved'
    },
    {
      img: 'https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=djcmeAgDXgG6pMoiubDGzzveTdQldVXbm0hzZUFonpc=',
      color:'pink',
      tag: 'Underbanked'
    }
  ]

  return (
    <div >
      <Section1 users={users}/>
    </div>
  )
}

export default App
