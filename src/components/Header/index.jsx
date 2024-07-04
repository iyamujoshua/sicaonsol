import React from 'react'
import { useEffect } from "react";
import profilepic from "../../assets/cropped.png"
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
    <p>Join this 14-year-old American Dachshund as he journeys through the Solana ecosystem. <br /> Watch as this curious and tech-savvy pup explores decentralized finance <br /> (DeFi), interacts with smart contracts, and learns about the intricacies of blockchain technology. <br /> From staking tokens to engaging in yield farming, this Dachshund's adventure is both educational and entertaining. <br /> Along the way, he meets various developers, learns about the security features of Solana, and discovers the potential of NFTs and the metaverse. <br /> This journey is a unique blend of canine curiosity and cutting-edge technology, <br /> perfect for enthusiasts of all ages!</p>
    <p className='CA'>CUAMZHziMo3VazR2tKKpDdgtur3b8JLCQZhXcanXpump</p>
    <a href="https://pump.fun/CUAMZHziMo3VazR2tKKpDdgtur3b8JLCQZhXcanXpump" className='Buy_sol'>Buy Now</a>
   </div>

   <div className='profile'>
    <img src={profilepic} alt="" />
   </div>
    </div>
  )
}

export default Header



