import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    const navigation = [
        {label:"Home", link:'/'},
        {label:"About", link:'/about'},
        {label:"Contact", link:'/contact'},
    ]
  return (
    <div className=' border p-1 my-2 flex justify-center gap-6'>
        {
            navigation.map((_ , index)=>(
                 <Link to={_.link}>   <h6 className=' text-slate-900 cursor-pointer hover:underline'>{_.label}</h6> </Link>
            ))
        }
        </div>
  )
}

export default Header