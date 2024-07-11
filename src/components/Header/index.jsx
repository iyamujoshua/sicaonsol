import React from 'react'
import { useEffect } from "react";
import profilepic from "../../assets/sica.jpeg"
import "./style.css"
import twitter from "../../assets/twitter.png"
import telegram from "../../assets/telegram.png"
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
   <div className='Big-Header'>
    <h1>SICA</h1>
<p></p>
    <p className='CA'> CA: *************</p>
    <a href="" className='Buy_sol'>Buy Now</a>
   </div>

   <div className='profile'>
    <img src={profilepic} alt="" />
   </div>
    </div>
  )
}

export default Header



