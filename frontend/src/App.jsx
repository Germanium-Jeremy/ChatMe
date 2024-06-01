import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Chat from './pages/Chat'
import Register from './pages/Register'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Forgot from './pages/Forgot'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <ChatContextProvider user={user}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/chat' element={user ? <Chat /> : <Login />} />
        <Route path='/register' element={user ? <Chat /> : <Register />} />
        <Route path='/login' element={user ? <Chat /> : <Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='*' exact element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </ChatContextProvider>
  )
}

export default App
