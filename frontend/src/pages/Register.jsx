import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const { registerInfo, updateRegisterInfo, registerUser, registerError, registerLoading } = useContext(AuthContext)
  return (
    <div className='pt-20 flex flex-col justify-center items-center h-full w-full mb-[2rem]'>
      <h1 className='my-[1rem]'>Register To ChatMe</h1>
      {registerError?.error &&
        <div className='w-3/5 rounded-md max-md:w-full md:my-[1rem] p-[1rem] text-center bg-orange-300 text-gray-900'>
          <p>{registerError?.message}</p>
        </div>
      }
      <form className='w-3/5 max-md:w-full rounded-md bg-[#001d] px-[1rem] max-sm:px-1 max-sm:bg-[#0010] py-[1rem]' onSubmit={registerUser}>
        <div className='w-full my-[.6rem]'>
          <label className='block text-xl'>Username</label>
          <input autoComplete='' type="text" className='w-full p-2 rounded-md outline-none text-gray-900' placeholder='Username' required onChange={(e) => updateRegisterInfo({ ...registerInfo, username: e.target.value })} />
        </div>
        <div className='w-full my-[.6rem]'>
          <label className='block text-xl'>Email</label>
          <input autoComplete='' type="email" className='w-full p-2 rounded-md outline-none text-gray-900' placeholder='Email' required onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })} />
        </div>
        <div className='w-full my-[.6rem]'>
          <label className='block text-xl'>Password</label>
          <input autoComplete='' type="password" className='w-full p-2 rounded-md outline-none text-gray-900' placeholder='Password' required onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })} />
        </div>
        <div className='w-full mt-[1.5rem]'>
          <button type="submit" className={`w-full p-2 rounded-md font-bold ${registerLoading ? "bg-gray-500 cursor-not-allowed" : "bg-white hover:bg-[#0efe] text-gray-900"}`}>
            {registerLoading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register