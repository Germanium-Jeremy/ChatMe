import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import moment from 'moment'
import InputEmogi from 'react-input-emoji'
import { FaEnvelope } from 'react-icons/fa'

const ChatBox = () => {
     const { user } = useContext(AuthContext)
     const { currentChat, messages, isMessagesLoading, sendTextMessage } = useContext(ChatContext)
     const { recipientUser } = useFetchRecipientUser(currentChat, user)
     const [textMessage, setTextMessage] = useState("")

     console.log("Chat User Recipient In ChatBox Is: ", recipientUser)
    

    //  if (!recipientUser) return (<p className='text-xl'>No Conversation Selected Yet...</p>)
     if (isMessagesLoading) return (<p className='text-xl'>Messages Loading...</p>)
  return (
    <div className='rounded-md flex flex-col items-center w-3/5 min-h-[15cm] bg-slate-900'>
      <div className='flex w-full justify-center items-center bg-[#222] p-2'>
        <strong>{recipientUser?.username}h</strong>
      </div>
      <div className='w-full h-full p-3'>
        {messages && messages.map((message, index) => <div key={index} className={`${message?.senderId === user?._id ? "bg-[#0efe] self-end flex-grow-0" : "bg-slate-800 self-start flex-grow-0"} w-fit max-w-[10cm] rounded-md p-3`}>
          <p>{message.text}</p>
          <span>{moment(message.createdAt).calendar()}</span>
        </div>)}
      </div>
      <div className='w-full bg-slate-800 p-2 flex'>
        <InputEmogi value={textMessage} onChange={setTextMessage} borderColor='black' />
        <button onClick={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)} className='rounded-full p-2 text-2xl bg-[#0efe] text-black'><FaEnvelope /></button>
      </div>
    </div>
  )
}

export default ChatBox