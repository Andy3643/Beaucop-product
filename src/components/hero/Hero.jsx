import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {BsArrowRightCircle} from "react-icons/bs"
import {RiShoppingBagFill} from "react-icons/ri"
import{motion} from 'framer-motion'

function Hero() {
    const transition = {duration:3,type:"spring"}
  return (
    <div className={css.container} >
        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Helping you reach your clear skin goals. Clear skin, more fun</span>
            </div>
        </div>

        {/* middle side */}
        <div className={css.wrapper}>
              {/* blue circle */}
              <motion.div 
              initial={{bottom:"2rem"}}
              whileInView={{bottom:"0rem"}}
              transition={transition}
              className={css.blueCircle}></motion.div>
               
               {/* image */}
               <motion.img
               initial={{bottom:"-2rem"}}
               whileInView={{bottom:"0rem"}}
               transition={transition}
               src={HeroImg} alt="" width={600} />
               
               {/* card */}
               <motion.div 
               initial={{right:"4%"}}
               whileInView={{right:"2%"}}
               transition={transition}
               className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best Sign up Offers</span>
                        <BsArrowRightCircle/>
                    
                </div>
               </motion.div>
        
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