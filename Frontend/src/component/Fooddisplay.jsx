import React, { useContext } from 'react';
import { StoreContext } from '../Contex/storecontext';
import { assets } from '../assets/frontend_assets/assets.js';

const Fooddisplay = ({ category }) => {
  const { food_list, cartItem, addTOcart, removeFromcart } = useContext(StoreContext);

  return (
    <div id='food-display' className='px-4 md:px-8 lg:px-16 py-8'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center sm:text-left'>
        Top Dishes Near You
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {food_list.map((item, id) => {
          const count = cartItem[id] || 0;
          if (category === "All" || category === item.category) {
            return (
              <div key={id} className='relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden'>

                {/* Image Section */}
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-44 sm:h-48 object-cover rounded-t-xl" />

                  {/* Cart Controls */}
                  <div className="absolute right-2 bottom-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center gap-2">
                    {count > 0 && (
                      <>
                        <button onClick={() => removeFromcart(id)}>
                          <img src={assets.remove_icon_red} alt="remove" className="w-5 h-5 hover:scale-110 transition" />
                        </button>
                        <span className="font-semibold text-gray-700">{count}</span>
                      </>
                    )}
                    <button onClick={() => addTOcart(id)}>
                      <img src={assets.add_icon_green} alt="add" className="w-5 h-5 hover:scale-110 transition" />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className='p-3 flex flex-col justify-between flex-grow'>
                  <div>
                    <div className='flex justify-between items-center mb-1'>
                      <p className='font-semibold text-base sm:text-lg'>{item.name}</p>
                      <img src={assets.rating_starts} alt='rating' className='w-16 sm:w-20' />
                    </div>
                    <p className='text-sm text-gray-600'>{item.description}</p>
                  </div>

                  <div className='mt-3 flex justify-between items-center'>
                    <p className='text-red-600 font-bold text-lg sm:text-xl'>${item.price}</p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
