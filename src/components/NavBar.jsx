import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'

const NavBar = () => {
  return (
    <header className='w-full flex justify-between items-center py-5 px-5 sm:px-10'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple Logo" width={18} height={18} />
            
            <div className='flex flex-1 gap-3 max justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key={nav} className='px-5 text-sm text-gray-100 hover:text-white transition-all cursor-pointer'>
                        {nav}
                    </div>
                    
                ))}
            </div>
            
            <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="searchImage" width={18} height={18}/>
                <img src={bagImg} alt="bagImage" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar