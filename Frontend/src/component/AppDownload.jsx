import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
    return (
        <div className='w-full mt-16 flex flex-col items-center justify-center px-4'>
            
            {/* Title */}
            <p className='text-center text-2xl sm:text-3xl font-medium'>
                <span className='block'>For Better Experience Download</span>
                <span className='block'>Tomatto App</span>
            </p>

            {/* Store Buttons */}
            <div className='mt-6 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8'>
                <img src={assets.play_store} alt='Google Play' className='w-40 md:w-48 cursor-pointer hover:scale-105 transition-transform' />
                <img src={assets.app_store} alt='App Store' className='w-40 md:w-48 cursor-pointer hover:scale-105 transition-transform' />
            </div>
        </div>
    )
}

export default AppDownload
