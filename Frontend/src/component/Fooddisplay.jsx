import React, { useContext } from 'react';
import { StoreContext } from '../Contex/storecontext';
import { assets } from '../assets/frontend_assets/assets.js';

const Fooddisplay = ({ category }) => {
    const { food_list, cartItem, addTOcart, removeFromcart } = useContext(StoreContext);

    return (
        <div id='food-display'>
            <h2 className='text-3xl font-semibold my-6'>Top Dishes near you</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {food_list.map((item, id) => {
                    const count = cartItem[id] || 0;

                    if (category === "All" || category === item.category) {

                        return (
                            <div key={id} className='relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white flex flex-col h-full overflow-hidden'>
                                {/* Image + Counter */}
                                <div className="relative">
                                    <img src={item.image} alt="food" className="w-full h-48 object-cover rounded-t-xl" />

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

                                {/* Item Info */}
                                <div className='p-3 flex flex-col justify-between h-full'>
                                    <div>
                                        <div className='flex justify-between items-center mb-1'>
                                            <p className='font-semibold text-lg'>{item.name}</p>
                                            <img src={assets.rating_starts} alt='rating' className='w-20' />
                                        </div>
                                        <p className='text-sm text-gray-600'>{item.description}</p>
                                    </div>

                                    <div className='mt-3 flex justify-between items-center'>
                                        <p className='text-red-600 font-bold text-xl'>${item.price}</p>
                                        {/* <button
                    onClick={() => addTOcart(id)}
                    className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 text-sm"
                  >
                    ADD CART
                  </button> */}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                })}
            </div>
        </div>
    );
};

export default Fooddisplay;
