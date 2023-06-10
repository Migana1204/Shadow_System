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
    <div className="container mx-auto shadow-2xl">
      <Slider {...settings}>
        <div>
          <img src="https://i.ytimg.com/vi/7W0ISI3yqwo/maxresdefault.jpg" alt="Slide 1" width={"750px"}  class="mx-auto block"/>
        </div>
        <div>
          <img src="https://mott.pe/noticias/wp-content/uploads/2018/06/que-necesitas-para-armar-tu-kit-de-iluminacion-para-fotografia-profesional.png" alt="Slide 2" width={"750px"}  class="mx-auto block"/>
        </div>
        <div>
          <img src="https://www.blogdelfotografo.com/wp-content/uploads/2021/03/mega-guia-reflex-3.webp" alt="Slide 3" width={"750px"}  class="mx-auto block"/>
        </div>
      </Slider>
    </div>
  );
};


