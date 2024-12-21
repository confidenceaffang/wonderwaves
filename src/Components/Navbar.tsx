"use client"
import React, { useState } from 'react'
import Image from "next/image"
import logo from "@/assets/logo.png"
const Navbar = () => {
    const [showname, setShowName] = useState(false)
    
  return (
    <nav className='flex flex-row item-center justify-between'> 
        <div className='py-7 px-5 flex relative flex items-center space-x-6'
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={()=> setShowName(false)}>
            <Image src={logo} alt='icon' height={150} width={150} />
            <span
          className={`absolute left-16 transition-all duration-300 ease-in-out text-gray-700 px-2 whitespace-nowrap text-3xl font-bold items-center ${
            showname ? "opacity-100 translate-x-4" : "opacity-0 translate-x-0"
          }`}
        >
          Wonder Waves Travels
        </span>
        </div>
        <div className='flex items-center'>
            <ul>
                <button className='border-4 border-neutral-900 rounded-full mr-4 p-3 hover:bg-orange-600'>
                   Home 
                </button>
                <button className='border-4 border-neutral-900 rounded-full mr-4 p-3 hover:bg-orange-600'>
                    About Us
                </button>
                <button className='border-4 border-neutral-900 rounded-full mr-4 p-3 hover:bg-orange-600'>
                    Programs
                </button >
                <button className='border-4 border-neutral-900 rounded-full mr-4 p-3 hover:bg-orange-600'>
                    Testimonials
                </button>
                <button className='border-4 border-neutral-900 rounded-full mr-4 p-3 hover:bg-orange-600'>
                    Contact US
                </button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
