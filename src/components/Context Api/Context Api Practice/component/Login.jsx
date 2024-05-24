import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { SetUserInform } = useContext(UserContext)

  const handleFormSubmint = () => {
    if(userName || password ){
      SetUserInform({ userName, password })
    }else if (userName || password == ''){  
      alert('please enter complete information')
    }else{
      alert('please enter complete information')
    }
  }

  return (
    <div className='flex gap-2'>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleFormSubmint} className='border rounded-lg px-5 py-1 text-white'>Submint</button>
    </div>
  )
}

export default Login