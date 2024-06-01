import React from 'react'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import UserChat from '../components/chat/userChat'
import { AuthContext } from '../context/AuthContext'
import PotentialChats from '../components/chat/PotentialChats'
import ChatBox from '../components/chat/ChatBox'

const Chat = () => {
  const { userChats, isUserChatsLoading, updateCurrectChat } = useContext(ChatContext)
  const { user } = useContext(AuthContext)
  return (
    <div className='mt-20 justify-center items-center w-full'>
      <PotentialChats />
      {userChats?.length < 1 ? null :
      <div className='flex justify-evenly gap-[1rem] items-center'>
        <div className='p-2'>
          {isUserChatsLoading && <p>Loading Chats...</p>}
          {userChats?.map((chat, index) => {
            return (
              <div key={index} onClick = {() => updateCurrectChat(chat)}>
                <UserChat chat={chat} user={user} />
              </div>
            )
          })}
        </div>
        <ChatBox />
      </div>
      }
    </div>
  )
}

export default Chat