import React, { useRef, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";

const SearchBar = () => {
    const [isOpen, SetIsOpen] = useState(false)
    const [isQuerySelect, setIsQuerySelect] = useState(String)
    const inputRef = useRef(undefined)
    const [data, setData] = useState([
        { id: 1, label: "Movie", name: "The Matrix" },
        { id: 2, label: "Historical Place", name: "Great Wall of China" },
        { id: 3, label: "City", name: "London" },
        { id: 4, label: "Movie", name: "Inception" },
        { id: 5, label: "Historical Place", name: "Machu Picchu" },
        { id: 6, label: "City", name: "Paris" },
        { id: 7, label: "Movie", name: "Interstellar" },
        { id: 8, label: "Historical Place", name: "Pyramids of Giza" },
        { id: 9, label: "City", name: "New York City" },
        { id: 10, label: "Movie", name: "The Godfather" },
    ])

    const filterData = data.filter((item) => {
        return item.name.toLowerCase().includes(isQuerySelect.toLowerCase())
    })
    const handleAddOption = (value) => {
        setIsQuerySelect('')
        setData((prevName) => prevName === data.name ? alert('alert') : [...data, {
            id: data.length + 1,
            label: value,
            name: value,
        }])
    }

    const handleDropdownOpen = () => {
        SetIsOpen(true)
    }
    const handleInputChange = (value) => {
        setIsQuerySelect(value)
    }

    return (
        <div className=' flex justify-center items-center align-middle h-[70vh] '>
            <div className=" relative w-1/3 ">
                <div className="flex justify-between gap-1 items-center h-9 w-full border-neutral-200 bg-neutral-100 rounded-lg px-3    ">
                    <input ref={inputRef} type="text" className=" grow bg-transparent text-sm outline-none focus:outline-none placeholder:text-neutral-500  text-black truncate" placeholder='Search' onClick={handleDropdownOpen} onChange={(e) => handleInputChange(e.target.value)} value={isQuerySelect} />
                    <IoSearchOutline size={18} className=" cursor-pointer " />
                </div>
                {isOpen && (
                    <div id='InputDiv' className=" absolute top-11 bg-white shadow-md rounded-lg w-full ">
                        <div className=" flex flex-col gap-3 p-3">
                            {
                                filterData.length > 0 ?
                                    filterData.map((item, index) => {
                                        return (
                                            <h6 className=" text-sm text-black " key={item.id}> • {item.name}</h6>
                                        )
                                    }) :
                                    <div className="flex items-center gap-1 text-sm bg-neutral-100 hover:bg-neutral-200 rounded-md px-1.5 py-2 cursor-pointer" onClick={() => handleAddOption(isQuerySelect)}>
                                        <IoIosAddCircleOutline size={20} />
                                        <span className=" font-medium ">Add Query in Options: </span>
                                        <span >{isQuerySelect}</span>
                                    </div>
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar