import React from "react";
import "./style.css";
import twitter from "../../assets/twitter.png"
import telegram from "../../assets/telegram.png"


export default function Footer() {
  return (
    <div className="Footer" id="Social">
      <div className="Footer_flex">
<h1>🇱🇷</h1>

      </div>
      <div className="Socials">
    <a href="https://x.com/CABIBI_SOL" className="parents"><img src={twitter} height={22} width={22} alt="" /></a>
    <a href="https://t.me/cabibi_sol" className="parents"><img src={telegram} height={22} width={22} alt="" /></a>
   

</div>
    </div>
  );
}

