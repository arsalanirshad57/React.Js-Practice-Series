import React, {useState } from 'react'

function IndexBasedMaping() {
  const [active, setActive] = useState(null)
   const array = [
    {
    name:"Ahmed",
    },
    {
    name:"huzaifa",
    },
    {
    name:"riaz",
    },
    {
    name:"jawad",
    },
    {
    name:"wasi",
    },
    {
    name:"rafat",
    },
    {
    name:"hamza",
    },
    {
    name:"hamass",
    },
  ]
  const handleChange = (index)=>{
setActive((prevIndex)=>index === prevIndex ? null : index)
  }

  return (
    <div className=' font-sans'>
      <div className='border my-2 flex justify-center items-center p-1 text-2xl '>
        Index Based Maping Practice 
      </div>
      {
        array.map((curr , index)=>{
          	return (
          <>
          <div  className=' inline-flex  items-center gap-2 p-1'>
          <span>{index} :- </span>
         <span onClick={()=>handleChange(index)}  className=' cursor-pointer'>{curr.name}</span>
         <span className={`${ active === index ? ' text-green-600': ' text-red-600'} ml-2`} >{ active === index ? 'checked': 'unChecked'}</span>
         </div> <br/>
          </>
        ) })
      }
      <div className='border p-1 my-1 flex items-center justify-center'>
        Slected Roll Number: {active}
      </div>
    </div>
  )
}

export default IndexBasedMaping

