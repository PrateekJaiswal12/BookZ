import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

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

  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])
  return ( 
    <div className='mt-28 px-4  lg:px-24'>
      <div className='border-l-4 border-cyan-500'>  <h2 className="text-5xl font-bold border-r border-cyan-500 px-2 my-5 text-black">All Books are Here!!</h2></div>

      <div className="grid gap-8 lg:grid-cols-4 my-12 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          books.map(book => <Card key={book._id}>
            <img src={book.imageUrl} alt="" className='h-80' />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal flex flex-col justify-center italic text-gray-700 dark:text-gray-400">
              <p className="font-normal flex gap-2 italic text-gray-700 dark:text-gray-400">
              <StarRating rating={book.rating} />
              <span>({book.num_ratings})</span>
              </p>
              Author: {book.authorName}

              <p className="font-normal italic text-gray-700 dark:text-gray-400">
                Category: {book.category}
              </p>
              <Link to={book.bookPdfUrl} className='bg-amber-500 text-center font-semibold text-white mt-2 rounded-lg p-2'>Add to cart</Link>
            </p>

            
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
