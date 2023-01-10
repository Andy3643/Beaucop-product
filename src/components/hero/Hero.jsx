import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {BsArrowRightCircle} from "react-icons/bs"
import {RiShoppingBagFill} from "react-icons/ri"


function Hero() {
  return (
    <div className={css.container} >
        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Seedily say has Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</span>
            </div>
        </div>

        {/* middle side */}
        <div className={css.wrapper}>
              <div className={css.blueCircle}></div>
               <img src={HeroImg} alt="" width={600} />
               <div className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                        <BsArrowRightCircle/>
                    
                </div>
               </div>
        
         </div>


        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5 M</span>
                <span>Monthly traffic</span>

            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy customers</span>
            </div>
        </div>

    </div>
  )
}

export default Hero