import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { logoutUser, loginUser, loginError, loginInfo, updateLoginInfo, loginLoading } = useContext(AuthContext)
  return (
    <div className='pt-20 flex flex-col justify-center items-center h-full w-full'>
      <h1 className='my-[1rem]'>Sign in To ChatMe</h1>
      <form className='w-3/5 max-md:w-full rounded-md bg-[#001d] px-[1rem] max-sm:px-1 max-sm:bg-[#0010] py-[1rem]' onSubmit={loginUser}>
        <div className='w-full my-[.6rem]'>
          <label className='block text-xl'>Email</label>
          <input autoComplete='' type="email" onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})} className='w-full p-2 rounded-md outline-none text-gray-900' placeholder='Email' required />
        </div>
        <div className='w-full my-[.6rem]'>
          <label className='block text-xl'>Password</label>
          <input autoComplete='' type="password" onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})} className='w-full p-2 rounded-md outline-none text-gray-900' placeholder='Password' required />
        </div>
        <div className='w-full my-[.6rem] flex flex-row justify-center items-center text-center'>
          <input autoComplete='' type="checkbox" className='mx-2' id='remember' />
          <label htmlFor='remember'>Remember Me</label>
        </div>
        <div className='w-full mt-[1.5rem]'>
          <button type="submit" className={`w-full p-2 rounded-md font-bold ${loginLoading ? "bg-gray-500 cursor-not-allowed" : "bg-white hover:bg-[#0efe] text-gray-900"}`}>
            {loginLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </form>
      <div className='w-full my-[.6rem] text-center'>
          <Link to="/forgot" className=' hover:text-[#0ff]'>Forgot Password</Link>
      </div>
      {loginError?.error &&
        <div className='w-3/5 max-md:w-full md:my-[1rem] p-[1rem] text-center bg-orange-300 rounded-md text-gray-900'>
          <p>{loginError?.message}</p>
        </div>
      }
    </div>
  )
}

export default Login