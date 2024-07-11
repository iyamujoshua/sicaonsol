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
    <h1>$SiCA</h1>
    <h3>Silly Cat</h3>
<p><a href="https://www.reddit.com/r/redditgetsdrawnbadly/s/oaetDSGgqC">About silly cat</a></p>
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



