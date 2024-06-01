import React from 'react'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import Avator from '../../assets/avator.svg'

const userChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user)
  return (
    <div className='flex flex-row gap-[1rem] items-center p-2 justify-between border-b shadow-lg shadow-[#3338] px-[1rem] my-[1rem] cursor-pointer'>
      <div className='flex justify-center items-center'>
        <div className='mr-3'>
          <img src={Avator} alt={recipientUser?.username} className='h-[40px] w-[40px] rounded-full self-center' />
        </div>
        <div className='mr-2'>
          <div>{recipientUser?.username}</div>
          <div>Text Message</div>
        </div>
      </div>
      <div className='flex flex-col items-end relative'>
        <div>12/12/1212</div>
        <div className='text-[#114] bg-[#0efe] rounded-full h-4 w-4 p-2 font-bold items-center flex justify-center'>1</div>
        <span className='bg-[#1f1] rounded-full h-3 w-3 absolute -top-4 -right-5'></span>
      </div>
    </div>
  )
}

export default userChat