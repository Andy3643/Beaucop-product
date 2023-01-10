import React from 'react';
import './Slider.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Pagination,Navigation} from "swiper";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {SliderProducts} from '../../data/products'

function Slider() {
  return (
    <div className='s-container'>
        <Swiper 
        sidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
            {SliderProducts.map((slide,i) =>(
                <SwiperSlide>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}$</span>
                        <div>Shop now</div>
                    </div>
                    <img src={slide.img} alt="product" className='img-p' />
                </SwiperSlide>
            ))}
            
        </Swiper>   

    </div>
  )
}

export default Slider
