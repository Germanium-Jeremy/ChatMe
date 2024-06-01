import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className='pt-20 flex flex-col justify-center items-center h-full w-full'>
      <h1 className='my-[1rem]'>Forgot ChatMe Password</h1>
      <form className='w-3/5 max-md:w-full rounded-md bg-[#001d] px-[1rem] max-sm:px-1 max-sm:bg-[#0010] py-[1rem]'>
        <div className='w-full my-[.6rem]'>
          <label className='block text-xl'>Email</label>
          <input type="email" className='w-full p-2 rounded-md outline-none text-gray-900' placeholder='Email' required />
        </div>
        <div className='w-full mt-[1.5rem]'>
          <button type='submit' className='w-full p-2 rounded-md font-bold hover:bg-[#0efe] bg-white text-gray-900'>Get Code</button>
        </div>
      </form>
      <div className='w-3/5 max-md:w-full md:my-[1rem] rounded-md p-[1rem] text-center bg-orange-300 text-gray-900'>
        <p>There is an Error</p>
      </div>
    </div>
  )
}

export default Forgot