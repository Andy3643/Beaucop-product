import React from 'react'

import css from './Contact.module.css'
function Contact() {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
               
                <span>Designed by 
                    <br />
                    Andy Opote <br />
                    0790 552 354
                </span>
            </div>
          
        </div>
    </div>
  )
}

export default Contact