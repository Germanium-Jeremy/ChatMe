import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext()

export const ChatContextProvider = ({ children, user }) => {
     const [userChats, setUserChats] = useState(null)
     const [isUserChatsLoading, setIsUserChatsLoading] = useState(false)
     const [userChatsError, setUserChatsError] = useState(null)
     const [potentialChats, setPotentialChats] = useState([])
     const [currentChat, setCurrentChat] = useState(null)
     const [messages, setMessages] = useState(null)
     const [isMessagesLoading, setIsMessagesLoading] = useState(false)
     const [messageError, setMessageError] = useState(null)
     const [sendTextMessageError, setTextMessageError] = useState(null)
     const [newMessage, setNewMessage] = useState(null)

     console.log("Messages: ", messages);

     useEffect(() => {
          const getUsers = async () => {
               const response = await getRequest(`${baseUrl}/api/v1/get_all_users`)
               if (response.error) return console.log("Error fetching Users ", response)

               const pChats = response.filter((u) => {
                    let isChartCreated = false
                    if (user._id === u._id) return false

                    if (userChats){
                         isChartCreated = userChats?.some((chat) => {
                              return chat.members[0] === u._id || chat.members[1] === u._id
                         })
                    }
                    return !isChartCreated
               })
               setPotentialChats(pChats)
          }
          getUsers()
     }, [userChats])

     useEffect(() => {
          const getUserChats = async () => {
               if (user?._id) {
                    setIsUserChatsLoading(true)
                    setUserChatsError(null)
                    const response = await getRequest(`${baseUrl}/api/v1/get_all_user_chats/${user?._id}`)
                    setIsUserChatsLoading(false)
                    if (response.error) return setUserChatsError(response)
                    setUserChats(response)                    
               }
          }
          getUserChats()
     }, [user])

     useEffect(() => {
          const getMessages = async () => {
               setIsMessagesLoading(true)
               setMessageError(null)
               const response = await getRequest(`${baseUrl}/api/v1/get_user_messages_involved/${currentChat?._id}`)
               setIsMessagesLoading(false)
               if (response.error) return setMessageError(response)
               if (response.length > 0) {
                    setMessages(response)
               } else {
                    console.log("No Message Back")
               }
          }
          getMessages()
     }, [currentChat])

     const sendTextMessage = useCallback( async (textMessage, senderId, currentChatId, setTextMessage) => {
          if (!textMessage) return console.log("No Message ...");
          const response = await postRequest(`${baseUrl}/api/v1/create_or_send_a_message`, JSON.stringify({
               chatId: currentChatId,
               senderId: senderId._id,
               text: textMessage
          }))
          if (response.error) return setTextMessageError(response)

          setNewMessage(response)
          setMessages((prev) => [...prev, response])
          setTextMessage("")
     }, [])

     const updateCurrectChat = useCallback((chat) => {
          setCurrentChat(chat)
     }, [])

     const createChat = useCallback( async (firstId, secondId) => {
          const response = await postRequest(`${baseUrl}/api/v1/create_new_chat`, JSON.stringify({
               firstId, secondId
          }))
          if (response.error) return console.log("Error Creating Chat ...", response)
          setUserChats((prev) => [...prev, response])
     }, [])

     return (
          <ChatContext.Provider value={{
               userChats,
               isUserChatsLoading,
               userChatsError,
               potentialChats,
               createChat,
               updateCurrectChat,
               messages,
               isMessagesLoading,
               messageError,
               sendTextMessage
          }}>
               {children}
          </ChatContext.Provider>
     )
}