import React from 'react'
import Img from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24  my-40 flex flex-col md:flex-row justify-between items-center gap-12'>
      
      <div className='md:w-1/2'>
        <img src={Img} alt=""  className='rounded md:w-10/12'/>
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:3/4 leading-snug">
            Find your Favorite <span className='text-blue-400'>Book Here!!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>Discover a world of literary wonders at our online bookstore! Dive into an engaging browsing experience where you'll find a vast array of genres, from timeless classics to contemporary bestsellers. With our extensive collection and user-friendly interface, your next favorite read is just a click away.</p>

        <div className="flex flex-col md:flex-row justify-start md:w-3/4 my-14 gap-8">
            <div>
                <h3 className="text-3xl font-bold">300K+</h3>
                <p className="text-base">Book Listings</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">550K+</h3>
                <p className="text-base">Registered Users</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">20K+</h3>
                <p className="text-base">Active Users</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">1M+</h3>
                <p className="text-base">Downloads</p>
            </div>
        </div>

        <Link to="/shop" className='mt-12 block'>
            <button className="bg-blue-600 hover:bg-blue-900 text-white font-semi-bold px-5 py-2 rounded transition-all duration-300">
                Explore More
            </button>
        </Link>
      </div>
    </div>
  )
}

export default FavBook
