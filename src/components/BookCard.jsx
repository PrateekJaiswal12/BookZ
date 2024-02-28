import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BookCard = ({headline, books}) => {

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
    <div className='my-16 px-4 lg:px-24'>
    <div className='border-l-4 border-cyan-500'>  <h2 className="text-5xl font-bold border-r border-cyan-500 px-2 my-5 text-black">{headline}</h2></div>
      <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        {
            books.map(book => <SwiperSlide key={book._id} className='p-3 border shadow-2xl my-8' >
                <Link to={`/book/${book._id}`}>
                    <div className='relative aspect-ratio-16/9'>
                        <img src={book.imageUrl} alt="" className='h-1/2 object-contain rounded'/>
                        <div className='absolute top-3 right-3 bg-cyan-900 hover:bg-cyan-600 p-2 rounded'>
                            <FaCartShopping className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div className='text-black py-2 text-start text-base'> 
                        <div className='gap-1'>
                          <p className='flex gap-2'>
                          <StarRating rating={book.rating} />
                          <span className='font-normal italic'>({book.num_ratings})</span>
                          </p>
                          <h3>{book.bookTitle}</h3>
                          <p className='italic font-normal text-base'>{book.authorName}</p>
                        </div>
                        <div>
                            <p><span className='text-amber-600'>$</span>10.00</p>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>)
        }

      </Swiper>
      </div>
    </div>
  )
}

export default BookCard
