import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SingleBook = () => {
    const {_id, bookTitle, imageUrl, category, authorName, bookDescription, bookPdfUrl, rating, num_ratings} = useLoaderData();

    const StarRating = ({ rating }) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-amber-600" />);
          } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
          }
        }
        return <div>{stars}</div>;
      };
  return (
    <div className='flex items-center min-h-screen justify-between py-40 '>
        <div className='w-3/5 ml-20 aspect-ratio-16/9'> 
         <img src={imageUrl} alt="" className='w-1/2 object-cover rounded'/>
        </div>

        <div className='mr-8 text-black w-5/6 px-4 lg:px-20 '>
            <h2 className='text-6xl text-cyan-900 font-bold leading-snug'>{bookTitle}</h2>
            <p className='px-5 flex gap-2'>
                <StarRating rating={rating} />
                <span className='font-normal text-cyan-900 italic'>({num_ratings})</span>
            </p>
            <p className=' mt-4 px-4 italic'>By- {authorName}</p>
            <p className=' px-4 italic'>Category- {category}</p>
            <p className='mt-4 px-4'>{bookDescription}</p>

            <button className='px-20 mt-10 py-2 text-white bg-blue-700 hover:bg-blue-900'>
                <Link to={bookPdfUrl}>
                    Buy Now
                </Link>
            </button>
        </div>
    </div>
  )
}

export default SingleBook
