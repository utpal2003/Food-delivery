import React, { useContext } from 'react'
import { StoreContext } from '../Contex/storecontext';
import { assets } from '../assets/frontend_assets/assets.js';

const Fooddisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='' id='food-display'>
            <h2 className='text-3xl font-semibold my-6'>Top Dishes near you</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                {food_list.map((items, id) => (
                    <div key={id} className='relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white flex flex-col h-full overflow-hidden'>
                        <div>
                            <img src={items.image} alt='image' />
                        </div>
                        <div className='p-2 '>
                            <div className='flex justify-between items-center p-2'>
                                <p className='font-semibold'>{items.name}</p>
                                <img src={assets.rating_starts} alt='rating' />
                            </div>
                            <p>{items.description}</p>
                            <p className='text-red-600 font-bold mt-2 ml-2 text-xl'>${items.price}</p>
                        </div>


                    </div>
                ))}
            </div>

        </div>
    )
}

export default Fooddisplay