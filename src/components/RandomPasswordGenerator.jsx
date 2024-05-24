import React, { useState } from 'react'
import { MdCopyAll } from "react-icons/md";
import '../App.css'

const RandomPasswordGenerator = () => {
    const [range, setRange] = useState(50)
const [passsword , setPassword] = useState('')
const [addNumber, setAddNumber] = useState(false)
const [addCharacter , setAddCharacter] = useState(false)
    const handleRangeSelect = (value) => {
        setRange(value)
    }

    return (
        <div className=' flex justify-center items-center  w-full h-screen'>
            <div className=" flex flex-col justify-center gap-3 items-center p-5 w-11/12  sm:w-9/12 lg:w-1/3 2xl:w-[28%] bg-white shadow-lg min-h-96 rounded-lg border ">
                <h1 className=" text-xl sm:text-2xl text-left w-full  font-[450]"> Passsword Generator</h1>
                {/* Password  */}
                <div className="flex justify-between items-center px-3  h-14 w-full rounded-md bg-black text-white">
                    <span className="">Your Password</span>
                    <MdCopyAll size={22} className='text-white cursor-pointer' />
                </div>
                {/* Select Range  */}
                <div className="w-full -mt-1.5">
                    <label htmlFor="range" className=" text-[13px] text-black">Select range :</label>
                    <div className="flex justify-between items-center gap-2 px-3 h-12 w-full roundepxd-md bg-black text-white text-sm rounded-md ">
                        <input type="range" name="" id="range" max={50} className='w-full' onChange={(e) => handleRangeSelect(e.target.value)} />
                        <span className="">{range}</span>
                    </div>
                </div>
                {/* ADD options  */}
                <div className=" flex justify-center items-center gap-2 flex-col w-full">
                    <div className="flex justify-between items-center gap-2 px-3 h-12 w-full rounded-md bg-black text-white text-sm ">
                        <span className="">Add Numbers</span>
                        <input type="checkbox" className='' onChange={(e) => console.log(e.target.checked ? 'true' : 'false')} />
                    </div>
                    <div className="flex justify-between items-center gap-2 px-3 h-12 w-full rounded-md bg-black text-white text-sm ">
                        <span className="">Add Characters</span>
                        <input type="checkbox" className='' />
                    </div>
                </div>

                <button type="button" className=" font-[420] text-white w-full text-center h-10 px-2 rounded-md bg-gradient-to-r from-indigo-400 to-violet-700 hover:from-indigo-400 hover:to-violet-800 ml-1.5">
                    Clear Password
                </button>
            </div>

        </div>
    )
}

export default RandomPasswordGenerator