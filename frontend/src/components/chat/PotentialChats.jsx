import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

const PotentialChats = () => {
     const { user } = useContext(AuthContext)
     const { potentialChats, createChat } = useContext(ChatContext)
  return (
    <div className=' overflow-x-auto'>
     <div className='flex flex-row gap-[1rem] pt-1'>
     {potentialChats && potentialChats.map((u, index) => (
          <div key={index} className='relative bg-[#0efe] text-[#114] font-bold px-[1rem] py-[.4rem] rounded-lg cursor-pointer hover:bg-[#0ffa]' onClick={() => createChat(user._id, u._id)}>
               {u.username.split(' '[0])}
               <span className='bg-[#1f1] rounded-full h-3 w-3 absolute -top-1 -right-1'></span>
          </div>
     ))}
     </div>
    </div>
  )
}

export default PotentialChats