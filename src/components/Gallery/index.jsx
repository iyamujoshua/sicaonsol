import React from 'react';
import image1 from "../../assets/sica.jpeg";
import image2 from "../../assets/sica1.jpeg";
import image5 from "../../assets/sica2.jpeg";
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
            <img src={image5} alt="" />
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
