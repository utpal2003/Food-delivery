import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <footer className="w-full bg-[#1e1e1e] text-gray-300 pt-12 mt-20" id="footer">
            <div className="max-w-screen-xl  mx-auto px-2 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 pb-10">

                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <img src={assets.logo} alt="Logo" className="w-36" />
                        <p className="text-md leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <img src={assets.facebook_icon} alt="facebook" className="w-8 h-8 hover:scale-110 transition rounded-full hover:bg-blue-700" />
                            <img src={assets.twitter_icon} alt="twitter" className="w-8 h-8 hover:scale-110 transition rounded-full hover:bg-blue-700" />
                            <img src={assets.linkedin_icon} alt="linkedin" className="w-8 h-8 hover:scale-110 transition rounded-full hover:bg-blue-500" />
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">COMPANY</h2>
                        <ul className="space-y-2 text-md">
                            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                            <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                            <li className="hover:text-yellow-400 cursor-pointer">Delivery</li>
                            <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">GET IN TOUCH</h2>
                        <ul className="space-y-2 text-md">
                            <li>+91-987-654-321</li>
                            <li>happyfood@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 mx-6 md:mx-16" />

            <p className="text-center text-xs py-6 text-gray-400">
                © 2025 Happyfood.com - All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer
