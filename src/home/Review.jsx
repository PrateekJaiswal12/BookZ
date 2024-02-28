import React, { useRef, useState } from 'react';
import {FaStar, FaStarHalf} from "react-icons/fa6"
import {AiOutlineStar} from "react-icons/ai"
import "../home/Review.css"
import Img1 from "../assets/profile.jpg"
import Img2 from "../assets/profile1.jpg"
import Img3 from "../assets/profile2.jpg"
import Img4 from "../assets/profile3.jpg"
import Img5 from "../assets/profile4.jpg"
import Img6 from "../assets/profile5.jpg"

import { Avatar } from 'flowbite-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Review = () => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <div className='border-l-4 m-auto border-cyan-500'>  <h2 className="text-5xl font-bold border-r border-cyan-500 px-2 my-5 text-black">Our Customers</h2></div>

      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="review"
      >
        <SwiperSlide className='mt-8 shadow-2xl lg:mt-15 border rounded'>
         <div className='flex flex-col justify-between h-full p-2 lg:p-4'>
            <div className='text-amber-600 gap-1 flex mb-5'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <AiOutlineStar/>
            </div>

            <div>
              <p className='text-sm text-black text-left font-normal'>Har Sector ka ek Gunda hota h or is sector me main hu. Mujhe banana ata hai or baaki to "Hum bhi bana lenge". Dekh tu Banda Great hai par Mila Thoda Late hai.</p>
                <div className='flex justify-start gap-4 mt-4 items-center'>
                  <Avatar img={Img3} className='w-10' rounded/>
                  <div className='text-black'>
                    <h5 className='text-lg font-medium'>Aman Gupta</h5>
                    <p className='text-sm font-normal italic'>CEO, Boat Pvt Ltd</p>
                  </div>
                </div>
            </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className='mt-8 shadow-2xl lg:mt-15 border rounded'>
         <div className='flex flex-col justify-between h-full p-2 lg:p-4'>
            <div className='text-amber-600 gap-1 flex mb-5'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
              <AiOutlineStar/>
            </div>

            <div>
              <p className='text-sm text-black text-left font-normal'>Basically Aap me vision ki kami hai varna main to technology or production lake apki help kar sakta hu but iske liye mujhe Aapki Company ka 50% equity chahiye</p>
                <div className='flex justify-start gap-4 mt-4 items-center'>
                  <Avatar img={Img4} className='w-10 ' rounded/>
                  <div className='text-black'>
                    <h5 className='text-lg font-medium'>Piyush Bansal</h5>
                    <p className='text-sm font-normal italic'>CEO, LensKart Pvt Ltd</p>
                  </div>
                </div>
            </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className='my-8 shadow-2xl lg:mt-15 border rounded'>
         <div className='flex flex-col justify-between h-full p-2 lg:p-4'>
            <div className='text-amber-600 gap-1 flex mb-5'>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </div>

            <div>
              <p className='text-sm text-black text-left font-normal'> Aap kya bohot Zyada Peete ho kya. Itna vahiyat Product hai na ye ki iske baad main or kuch ni dekhna chahta meko bhagwan utha le. Main tera doglapna utarta hu!!</p>
                <div className='flex justify-start gap-4 mt-4 items-center'>
                  <Avatar img={Img2} className='w-10' rounded/>
                  <div className='text-black'>
                    <h5 className='text-lg font-medium'>Ashneer Grover</h5>
                    <p className='text-sm font-normal italic'>CEO, Roadies Pvt Ltd</p>
                  </div>
                </div>
            </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className='mt-8 shadow-2xl lg:mt-15 border rounded'>
         <div className='flex flex-col justify-between h-full p-2 lg:p-4'>
            <div className='text-amber-600 gap-1 flex mb-5'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
            </div>

            <div>
              <p className='text-sm text-black text-left font-normal'>B-to-B me Aapki Achi Pakad hai then Expand it with B-to-C and Every Saturday Luch pe Aana hoga Noida Delhi. Angel round yahi pe kar le 5 Cr for 10 Equity.</p>
                <div className='flex justify-start gap-4 mt-4 items-center'>
                  <Avatar img={Img1} className='w-10' rounded/>
                  <div className='text-black'>
                    <h5 className='text-lg font-medium'>Dipender Goyal</h5>
                    <p className='text-sm font-normal italic'>CEO, Zomato Pvt Ltd</p>
                  </div>
                </div>
            </div>
         </div>
        </SwiperSlide>

        <SwiperSlide className='mt-8 shadow-2xl lg:mt-15 border rounded'>
         <div className='flex flex-col justify-between h-full p-2 lg:p-4'>
            <div className='text-amber-600 gap-1 flex mb-5'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <AiOutlineStar/>
            </div>

            <div>
              <p className='text-sm text-black text-left font-normal'>Apka Jo Target Market vo Cluttered Hai and isme Bussiness Kaise Create hoga iski Clarity mujhe Ni mil ri hai. To Because Meri isme "Expertise Ni Hai I AM OUT "</p>
                <div className='flex justify-start gap-4 mt-4 items-center'>
                  <Avatar img={Img5} className='w-10 ' rounded/>
                  <div className='text-black'>
                    <h5 className='text-lg font-medium'>Namita Thappar</h5>
                    <p className='text-sm font-normal italic'>CEO, Emcure Pvt Ltd</p>
                  </div>
                </div>
            </div>
         </div>
        </SwiperSlide>

        <SwiperSlide className='mt-8 shadow-2xl lg:mt-15 border rounded'>
         <div className='flex flex-col justify-between h-full p-2 lg:p-4'>
            <div className='text-amber-600 gap-1 flex mb-5'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            <div>
              <p className='text-sm text-black text-left font-normal'>Dekhiye pehle to main aapke numbers of ask ko hazam ni kar pa raha hu and on top of that apki Shadi ni hui hai to bhaiya main bahar hu isse but Good Luck.</p>
                <div className='flex justify-start gap-4 mt-4 items-center'>
                  <Avatar img={Img6} className='w-10' rounded/>
                  <div className='text-black'>
                    <h5 className='text-lg font-medium'>Anupam Mittal</h5>
                    <p className='text-sm font-normal italic'>CEO, Shadi.com & Rapido</p>
                  </div>
                </div>
            </div>
         </div>
        </SwiperSlide>
       
      </Swiper>
      </div>

    </div>
  )
}

export default Review
