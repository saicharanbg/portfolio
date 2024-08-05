import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PortfolioItem = ({ imgUrls, title }) => {
const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
};

  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-300">
      <div className="flex-1">
        <Slider {...settings}>
          {imgUrls.map((url, index) => (
            <div key={index} className="flex justify-center items-center h-64">
               <img src={url} alt={`Project image ${index + 1}`} className="object-contain w-full h-full" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mt-6">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioItem;
