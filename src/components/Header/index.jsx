import React from 'react'
import profilepic from "../../assets/profilepic.png"
import "./style.css"

function Header() {
  return (
    <div>
   <div className='Big-Header'>
    <h1>SPARKYONSOL</h1>
    <p>Sparky, an American Golden Retriever, lived in luxury. He donned a superhero suit and became "Crypto Pup," <br /> launching "PawCoin" to make crypto fun. Sparky's viral antics quickly spread, revolutionizing the crypto space.</p>
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
