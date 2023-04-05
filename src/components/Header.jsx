import React, { useState } from 'react';

import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';
import {XMarkIcon,Bars4Icon } from '@heroicons/react/24/solid'


const Header = () => {
    const [showNev,setShowNev] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
              <div className='relative flex items-center justify-between'>
                <div className='inline-flex items-center'>
                <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>NextPage</span>
                    
                </div>
                    <ul className={`items-center ${showNev ? 'block' : 'hidden'} space-x-8 lg:flex transition-all duration-300`}>
                            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                            <NavLink to="/books" className={({isActive}) => isActive ? "active" : ""}>Books</NavLink>
                            <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                    </ul>
                    <span className='' onClick={() =>setShowNev(!showNev) }> {showNev ? <XMarkIcon className="h-6 w-6 text-blue-500"/>:<Bars4Icon className="h-6 w-6 text-blue-500"/>}</span>
                    </div>
                    
        </div>
    );
};

export default Header;