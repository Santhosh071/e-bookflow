
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {} from 'react-icons/fa6'
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const BookCard = ({headline,Books}) => {
  //console.log(Books);
  return (
    <div className='my-16 px-4 lg:px-48'>
        <h2 className='text-5x1 text-center font-bold text-black my-9'>{headline}</h2>
      

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
          Books.map(book=><SwiperSlide key={book._id}>
          < Link to={`/book/${book._id}`}>
            <div className='relative'>
              <img src={book.imageUrl} alt=""/>
              <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                
                <FaCartShopping className='w-4 h-4 text-white'/>
              </div>
            </div>
            <div>
              <div>
              <h3 className='text-white'>
              {book.bookTitle}
              
            </h3>
            <p className='text-white'>{book.authorName}</p>
            </div>
            <div className='text-white'>
              <p>$10.00</p>
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
