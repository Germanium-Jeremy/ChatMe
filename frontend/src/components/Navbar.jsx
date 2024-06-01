import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
     const { user, logoutUser } = useContext(AuthContext)
  const [menuShown, setMenuShown] = useState(false)

  const showNav = () => {
    setMenuShown(!menuShown)
  }

  return (
    <div className='flex justify-between max-sm:justify-between items-center w-full shadow-xl py-[.5rem] px-[1rem] fixed top-0 left-0 right-0 bg-[#002] z-[5]'>
      <span className='text-2xl px-[1rem] py-2 rounded-md hover:text-[#0019] hover:bg-[#affd]'>
        <Link to={'/'}>ChatMe <span className='max-sm:visible sm:hidden text-lg'>{user?.username}</span></Link>
      </span>
      {user && <div className='text-[#affd] visible max-sm:hidden'>
        Logged In As {user?.username}
      </div>}
          {user && (
               <nav className={`flex justify-between w-fit text-xl max-sm:hidden`}>
                    <Link onClick={() => logoutUser()} to={"/login"} className='mx-[.4rem] max-lg:mx-[.3rem] px-[1rem] py-2 rounded-md hover:bg-[#0ffd] flex items-center'>
                         <span className='mr-3 max-lg:hidden max-md:block'><FaSignOutAlt /></span>
                         <span className='max-md:hidden'>Logout</span>
                    </Link>
               </nav>
          )}
          {user && (
               <div className={`flex w-full bg-slate-950 px-[1rem] justify-between text-xl fixed left-0 right-0 sm:hidden ${menuShown ? 'top-[4rem]' : '-top-[5rem]'}`}>
                    <Link onClick={() => logoutUser()} to={"/login"} className='mx-[.4rem] max-lg:mx-[.3rem] px-[1rem] py-2 rounded-md hover:bg-[#0ffd] flex items-center'>
                         <span className='mr-3 max-lg:hidden max-md:block'><FaSignOutAlt /></span>
                         <span className='max-md:hidden'>Logout</span>
                    </Link>
               </div>
          )}
          {!user && (
               <nav className={`flex justify-between w-fit text-xl max-sm:hidden`}>
                    <Link to={"/login"} className='mx-[.4rem] max-lg:mx-[.3rem] px-[1rem] py-2 rounded-md hover:bg-[#0ffd] flex items-center'>
                         <span className='mr-3 max-lg:hidden max-md:block'><FaSignInAlt /></span>
                         <span className='max-md:hidden'>Login</span>
                    </Link>
                    <Link to={"/register"} className='mx-[.4rem] max-lg:mx-[.3rem] px-[1rem] py-2 rounded-md text-[#001] bg-[#affd] hover:bg-[#0ffd] flex items-center'>
                         <span className='mr-3 max-lg:hidden max-md:block'><FaUserPlus /></span>
                         <span className='max-md:hidden'>Register</span>
                    </Link>
               </nav>
          )}
          {!user && (
               <div className={`flex w-full bg-slate-950 px-[1rem] justify-between text-xl fixed left-0 right-0 sm:hidden ${menuShown ? 'top-[4rem]' : '-top-[5rem]'}`}>
                    <Link to={"/login"} className='mx-[.4rem] my-[.5rem] max-lg:mx-[.3rem] px-[2rem] py-2 rounded-md text-[#001] bg-[#affd] hover:bg-[#0ffd] flex items-center'>
                         <span className='mr-3 max-lg:hidden max-md:block'><FaSignInAlt /></span>
                         <span className='max-md:hidden'>Login</span>
                    </Link>
                    <Link to={"/register"} className='mx-[.4rem] my-[.5rem] max-lg:mx-[.3rem] px-[2rem] py-2 rounded-md text-[#001] bg-[#affd] hover:bg-[#0ffd] flex items-center'>
                         <span className='mr-3 max-lg:hidden max-md:block'><FaUserPlus /></span>
                         <span className='max-md:hidden'>Register</span>
                    </Link>
               </div>
          )}
      <FaBars className=' max-sm:block hidden' onClick={showNav} />
    </div>
  )
}

export default Navbar
