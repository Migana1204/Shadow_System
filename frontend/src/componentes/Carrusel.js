import React from "react";
import 'tailwindcss/tailwind.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto shadow-xl pb-8 pt-6 rounded-md border-slate-50 border-t-2">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Slide 1" width={"750px"} className="imgCarrusel mx-auto block"/>
        </div>
        <div>
          <img src={img2} width={"750px"} className="imgCarrusel mx-auto block"/>
        </div>
        <div>
          <img src={img3} alt="Slide 3" width={"750px"}  className="imgCarrusel mx-auto block"/>
        </div>
      </Slider>
    </div>
  );
};


