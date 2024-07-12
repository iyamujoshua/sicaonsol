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
<a href="https://www.reddit.com/r/redditgetsdrawnbadly/s/oaetDSGgqC" className='silly'>About silly cat</a>
    <p className='CA'> CA: 6SMKH1CwaYqSkPbuTxcSppy8AgCwevWn7EdQfQm2pump</p>
    <a href="https://pump.fun/6SMKH1CwaYqSkPbuTxcSppy8AgCwevWn7EdQfQm2pump" className='Buy_sol'>Buy Now</a>
   </div>

   <div className='profile'>
    <img src={profilepic} alt="" />
   </div>
    </div>
  )
}

export default Header



