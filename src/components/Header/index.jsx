import React from 'react'
import { useEffect } from "react";
import profilepic from "../../assets/profilepic.png"
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
    <h1>SPARKYONSOL</h1>
    <p>Sparky, an American Golden Retriever, lived in luxury. He donned a superhero suit and became sparky <br /> launching $sparky to make crypto fun. Sparky's viral antics quickly spread, revolutionizing the crypto space.</p>
    <p className='CA'>CA: *******************************</p>
    <a href="#" className='Buy_sol'>Buy Now</a>
   </div>

   <div className='profile'>
    <img src={profilepic} alt="" />
   </div>
    </div>
  )
}

export default Header



