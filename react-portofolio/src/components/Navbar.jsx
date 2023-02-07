import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id :1,
      link : 'Home'
    },
    {
      id :2,
      link : 'About'
    },
    {
      id :3,
      link : 'Portofolio'
    },
    {
      id :4,
      link : 'Contact'
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black'>
      <div>
        <h1 className="text-3xl font-signature p-4 ml-4">
          Portofolia
        </h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-300'>{link}</li>
        ))}
      </ul>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        {links.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>{link}</li>
        ))}
      </ul>
      )}    

      

    </div>
  )
}

export default Navbar