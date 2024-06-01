import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'

const ChatBox = () => {
     const { user } = useContext(AuthContext)
     const { currentChat, messages, isMessagesLoading } = useContext(ChatContext)
     const { recipientUser } = useFetchRecipientUser(currentChat, user)
     if (!recipientUser) return (<p className='text-xl'>No Conversation Selected Yet...</p>)
  return (
    <div>ChatBox</div>
  )
}

export default ChatBox