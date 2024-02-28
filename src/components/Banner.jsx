import React from 'react'
import BannerCards from '../home/BannerCards'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-gradient-to-b from-cyan-900 to-cyan-200 flex items-center'>
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className='text-5xl font-bold leading-snug text-black text-white'>Where Stories Unite:  <span className='text-blue-300'>Buy or Sell Your Next Adventure :)</span></h2>
            <p className='text-white md:w-4/5'>Step into our book emporium, a haven for literary enthusiasts! Delve into a treasure trove of diverse titles, where you can easily browse, buy, or sell any book imaginable. Whether you're seeking classics or contemporary gems. Join us and ignite your passion for reading!</p>

            <div>
                <input type="search" id='search' name='search' placeholder='Discover, Explore, Read' className='w-64 py-2 outline-none' />
                <button className='bg-blue-600 px-6 py-2 text-white rounded-sm font-medium hover:bg-blue-900 transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        <div>
            <BannerCards/>
        </div>

      </div>
    </div>
  )
}

export default Banner
