import React from 'react';
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/imag3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import './style.css';

function Gallery() {
  return (
    <div className="News" data-aos="zoom-in">
      <div className="Bg_news">
        {/* <h1>Buy Cabibi</h1>
        <p>CABIBI come to DUBAI</p> */}

        <div className="card_container">
          <div className="my_cards">
            <img src={image1} alt="" />
            <div className="card_contents">
            </div>
          </div>
          {/* card 2 */}

          <div className="my_cards">
            <img src={image2} alt="" />
            <div className="card_contents">
            </div>
          </div>

          {/* card 3 */}

          <div className="my_cards">
            <img src={image3} alt="" />
            <div className="card_contents">
            </div>
          </div>

          <div className="my_cards">
            <img src={image4} alt="" />
            <div className="card_contents">
            </div>
          </div>
          <div className="my_cards">
            <img src={image5} alt="" />
            <div className="card_contents">
            </div>
          </div>
          <div className="my_cards">
            <img src={image6} alt="" />
            <div className="card_contents">
            </div>
          </div>
          
        </div>
        {/* <button>Read More</button> */}
      </div>
      

      

    </div>
  );
}

export default Gallery;
