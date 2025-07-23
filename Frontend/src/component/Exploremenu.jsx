import React from 'react';
import { menu_list } from '../assets/frontend_assets/assets';

const Exploremenu = ({ category, setcategory }) => {
    return (
        <div className='px-4 md:px-8 lg:px-16 py-8 mt-8' id='explore-menu'>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center mb-4'>
                Explore Our <span className="text-orange-500">Delicious Menu</span>
            </h1>


            <p className='max-w-3xl mx-auto text-center text-base md:text-lg text-gray-600 mb-10 leading-relaxed'>
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise to satisfy every craving.
            </p>

            <div className='flex justify-between gap-6 overflow-x-scroll no-scrollbar py-4 md:pb-6 px-4 '>
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        className={`min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 **flex-none**`}
                        onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                    >
                        {/* Menu Item Image */}
                        <img
                            src={item.menu_image}
                            alt={item.menu_name}
                            className={`w-full rounded-full transition-all duration-300 transform hover:shadow-lg hover:brightness-110  ${category===item.menu_name ? "ring-4 ring-orange-400 ":""}`}

                        />

                        <p className='text-sm md:text-base font-medium text-gray-700 whitespace-nowrap'>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr className=' bg-slate-200  rounded-lg' />
        </div>
    );
};

export default Exploremenu;