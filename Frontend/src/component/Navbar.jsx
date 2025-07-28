import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ setshowlogin }) => {
    const [menu, setMenu] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // New state to control the visibility of the search input overlay
    const [showSearchInput, setShowSearchInput] = useState(false); 

    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'explore-menu', label: 'Menu' },
        { id: 'mobile-App', label: 'Mobile App' },
        { id: 'contact-us', label: 'Contact Us' },
    ];

    const handleScroll = (id) => {

        setMenu(id); 


        if (location.pathname !== '/') {
            navigate('/');

            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Small delay to allow page render
        } else {

            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className='w-full bg-white px-6 py-4 sticky top-0 z-40'>
            <div className='mx-auto flex justify-between items-center max-w-7xl'>

                {/* Logo */}
                <img
                    src={assets.logo}
                    alt='logo'
                    className='w-28 h-auto cursor-pointer'
                    onClick={() => {
                        handleScroll('home'); 
                    }}
                />

                {/* Desktop Navigation */}
                <ul className='hidden md:flex items-center gap-8 text-[#49557e] text-lg font-medium'>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            // Use handleScroll for all navigation items
                            onClick={() => handleScroll(item.id)}
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

                {/* Right Side - Desktop */}
                <div className="flex items-center gap-4 md:gap-6">

                    <img 
                        src={assets.search_icon} 
                        alt="search" 
                        className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200" 
                        onClick={() => setShowSearchInput(true)} 
                    />
                    <div className="relative">

                        <Link to='/cart' onClick={() => setMenu('cart')}>
                            <img src={assets.basket_icon} alt="cart" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200" />
                        </Link>
                        <div className="absolute h-3 w-3 bg-red-500 border border-white rounded-full -top-1.5 -right-1.5"></div>
                    </div>
                    <button className="hidden md:inline-block bg-transparent font-medium text-[#49557e] border border-green-400 px-5 py-1.5 rounded-full hover:bg-green-100 transition duration-300 ease-in-out" onClick={() => setshowlogin(true)}>
                        Sign in
                    </button>
                </div>

                {/* Hamburger Icon */}
                <div className='md:hidden'>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#49557e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden px-6 pt-4 pb-6 border-t bg-white rounded-xl'>
                    <ul className='flex flex-col justify-center items-center gap-4 text-[#49557e] text-base font-medium'>
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    handleScroll(item.id); 
                                }}
                                className={`
                                    cursor-pointer 
                                    ${menu === item.id ? 'text-green-600' : 'hover:text-green-500'} 
                                    hover:bg-green-100 
                                    w-full flex items-center justify-center 
                                    rounded-full py-2 px-4 transition-all duration-300
                                `}
                            >
                                {item.label}
                            </li>
                        ))}

                        {/* Sign In Button Below Mobile Menu */}
                        <div className='border-t-2 w-full flex justify-center pt-4'>
                            <button className='bg-transparent font-medium text-[#49557e] border border-green-400 px-5 py-1.5 rounded-full hover:bg-green-100 transition duration-300 ease-in-out' onClick={() => setshowlogin(true)}>
                                Sign in
                            </button>
                        </div>
                    </ul>
                </div>
            )}



            
        </nav>
    );
};

export default Navbar;
