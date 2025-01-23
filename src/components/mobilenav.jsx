import React from 'react';

const Mobilenav = (props) => {
  return (
    <div className={`h-[90vh] w-screen bg flex-col justify-start  absolute top-14 left-0 px-8 py-6 ${props.nav ? 'toggle-nav' : 'toggle-nav-off'} hidden`}>
      <div className='flex flex-col justify-between align-middle items-start py-6 text-xl text-red-600'>
        <div className='flex justify-between align-middle items-center py-6 border-b border-b-[#808080af] w-full hover:cursor-pointer transition-all'>
          <p>About</p>
        </div>
        <div className='flex justify-between align-middle items-center py-6 border-b border-b-[#808080af] w-full hover:cursor-pointer transition-all'>
          <p>Services</p>
        </div>
        <div className='flex justify-between align-middle items-center py-6 border-b border-b-[#808080af] w-full hover:cursor-pointer transition-all'>
          <p>Reviews</p>
        </div>
        <div className='flex justify-between align-middle items-center py-6 border-b border-b-[#808080af] w-full hover:cursor-pointer transition-all'>
          <p>Contact</p>
        </div>
      </div>

      <div className='flex flex-col justify-between align-middle items-center gap-4'>
        <button className='w-full border text-red-600 border-red-600 p-4 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Mobilenav;