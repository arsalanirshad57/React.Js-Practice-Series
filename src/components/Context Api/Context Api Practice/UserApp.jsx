import React, { useState } from 'react'
import UserContext from './context/UserContext'
import Login from './component/Login'
import MiniProfile from './component/MiniProfile'

const UserApp = () => {
  const [userInform, SetUserInform] = useState({})
  return (
    <UserContext.Provider value={{ userInform, SetUserInform }}>
      <div className=' flex flex-col gap-5 justify-center items-center h-screen bg-black '>
        <h1 className=' text-5xl text-white'> Regester YourSelf</h1>
        <Login />
        <MiniProfile />
      </div>
    </UserContext.Provider>
  )
}

export default UserApp