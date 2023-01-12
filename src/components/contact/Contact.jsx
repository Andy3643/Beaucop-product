import React from 'react'
import Logo from "../../assets/logo.png"
import css from './Contact.module.css'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline";
function Contact() {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>
        </div>
    </div>
  )
}

export default Contact