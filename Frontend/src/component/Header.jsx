import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Header = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className=' flex justify-center items-center'>
        <img
          src={assets.header_img}
          alt="Delicious food spread"
          className='w-full h-auto object-cover max-h-[500px] md:max-h-[600px] lg:max-h-[700px]'
        />
      </div>

      {/* Bottom-left content */}
      <div className='absolute left-4 bottom-6 md:bottom-8 flex flex-col justify-center items-center text-white p-4 text-center 
                      sm:left-6 sm:items-start sm:text-left sm:pl-8 
                      md:pl-10 lg:pl-16 animate-fadeIn '>

        <h2 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 lg:mb-3 drop-shadow-lg flex flex-col ">
          <p>Order Your</p>
          <p><span className="text-orange-400">Favorite Food</span> Here</p>

        </h2>

        <p className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed drop-shadow-md">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
        </p>

        <button className="bg-gray-200 text-gray-600 px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                          hover:bg-orange-500 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
          View Menu
        </button>
      </div>



    </div>
  );
};

export default Header;