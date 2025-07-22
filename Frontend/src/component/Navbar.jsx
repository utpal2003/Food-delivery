import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'menu', label: 'Menu' },
        { id: 'mobile-App', label: 'Mobile App' },
        { id: 'contact-us', label: 'Contact Us' },
    ];

    return (
        <div className='w-full bg-white px-6 py-4 '>
            <div className='mx-auto flex justify-between items-center max-w-7xl'>

                {/* Logo */}
                <img src={assets.logo} alt='logo' className='w-28 h-auto cursor-pointer' />

                {/* Navigation Links */}
                <ul className='flex items-center gap-8 text-[#49557e] text-lg font-medium'>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => setMenu(item.id)}
                            className={`
                                cursor-pointer relative 
                                transition-colors duration-300 ease-in-out 
                                ${menu === item.id ? 'text-green-600' : 'hover:text-green-500'}
                                before:content-[''] before:absolute before:bottom-[-6px] before:left-0 
                                before:w-0 before:h-[2px] 
                                before:bg-green-500 
                                before:transition-all before:duration-500
                                hover:before:w-full
                                ${menu === item.id ? 'before:w-full' : ''}
                            `}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className='flex items-center space-x-6'>
                    <img src={assets.search_icon} alt='search' className='w-6 h-6 cursor-pointer' />

                    <div className='relative'>
                        <img src={assets.basket_icon} alt='cart' className='w-6 h-6 cursor-pointer' />
                        <div className='absolute h-3 w-3 bg-red-400 rounded-full -top-2 -right-2'></div>
                    </div>

                    <button className='bg-transparent font-medium text-[#49557e] border border-green-400 px-5 py-1.5 rounded-full hover:bg-green-100 transition duration-300 ease-in-out'>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
