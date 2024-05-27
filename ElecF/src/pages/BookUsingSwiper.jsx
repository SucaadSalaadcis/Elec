import React, { useEffect, useState } from 'react'
import axios from 'axios';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from "react-icons/fa6"

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function BookUsingSwiper() {
    const [books, setBooks] = useState([]);

     const handlegetBooks = () => {
      axios.get("http://localhost:7000/book/").then((response) => {
        setBooks(response.data)
         console.log(response.data)
      }).catch((error) => console.log(error))
     }

    //  

    
     useEffect(()=> {
       handlegetBooks();
     },[])


  return (
    <div className='my-16 px-4 lg:px-24'>
    <h2 className='text-5xl text-center font-bold text-black my-5'>Best Seller Laptops</h2>
    {/* cards */}
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
        books.map(book => <SwiperSlide key={book._id}>
                <div className='relative'>
                    <img src={book.ImageURL} alt="" />
                    <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white'/> 
                    </div>
                </div>
                <div>

                    <div>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    </div>

                    <div>
                        <p>${book.price}</p>
                    </div>

                </div>

        </SwiperSlide> )
    }
  </Swiper>
        
  </div>

</div>
  )
}

export default BookUsingSwiper