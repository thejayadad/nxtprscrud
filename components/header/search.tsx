'use client'
import React from 'react'
import {FiSearch} from "react-icons/fi"

const Search = () => {
  return (
    <div
    className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
    >
        <div
        className='flex flex-row items-center justify-between'
        >
            <div className='text-sm font-semibold px-6'>
                Any Category
            </div>
            <div
            className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] text-center flex-1'
            >
                Any Vehicle
            </div>
            <div
            className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'
            >
                <div className='hidden sm:block'>
                    Any Type
                </div>
                <div className='p-2 rounded-full bg-gray-600 text-white'>
                    <FiSearch size={12} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search