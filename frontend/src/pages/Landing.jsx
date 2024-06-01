import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='mt-20 flex justify-center items-center text-center min-h-[10cm] w-full'>
      <Link className='px-[2rem] py-[.5rem] bg-[#0ef7] rounded-lg' to={'/chat'}>Your Chats</Link>
    </div>
  )
}

export default Landing
