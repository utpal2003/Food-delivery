import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Header = () => {
  return (
    <div className='relative w-full overflow-hidden' id='home'>
      {/* Background Image */}
      <div className='w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden '>
        <img
          src={assets.header_img}
          alt="Delicious food spread"
          className='w-full h-full object-cover'
        />
      </div>

      {/* Overlay Text */}
      <div className='absolute inset-0 flex flex-col justify-end sm:justify-center text-white px-4 sm:px-8 lg:px-16 pb-6 sm:pb-10 lg:pb-16 animate-fadeIn'>

        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 lg:mb-4 drop-shadow-lg text-center sm:text-left">
          <p>Order Your</p>
          <p><span className="text-orange-400">Favorite Food</span> Here</p>
        </h2>

        <p className="max-w-md sm:max-w-lg md:max-w-2xl text-xs sm:text-base md:text-lg lg:text-xl mb-5 leading-relaxed drop-shadow-md text-center sm:text-left">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
        </p>

        <div className='flex justify-center sm:justify-start'>
          <button className="bg-gray-200 text-gray-600 px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                            hover:bg-orange-500 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
            View Menu
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
