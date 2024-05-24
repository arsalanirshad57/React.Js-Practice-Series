import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const MiniProfile = () => {
  const {userInform} = useContext(UserContext)
  return (
    <div className='flex justify-center gap-4 text-white pr-36'>
      <span>YourName: &nbsp;  {userInform.userName}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>PassWord: &nbsp; {userInform.password}</span>
    </div>
  )
}

export default MiniProfile