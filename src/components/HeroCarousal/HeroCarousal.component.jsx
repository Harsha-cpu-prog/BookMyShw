import React   from "react";
import HeroSlider from "react-slick";


// component
import {NextArrow,PrevArrow} from "./Arrows.component";


const HeroCarousal = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow :<NextArrow/>,
        prevArrow:<PrevArrow/>,
      
      };


   const settings = {
       arrows:true,
    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow :<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };
      const images =[
    "https://images.unsplash.com/photo-1630636755810-0d1a9b556512?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
     "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
     "https://images.unsplash.com/photo-1630621655812-88e992e888fa?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
     "https://images.unsplash.com/photo-1630621655812-88e992e888fa?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        ];
    return(
    <>
    <div className="lg:hidden">
    <HeroSlider{...settings}>
    { images.map((image)=>(
            <div className="w-full h-56 md:h-80 py-3">
                <img src={image} alt="testing" className="w-full h-full "/>
            </div>
        )) }
    </HeroSlider>
    </div>


    <div className="hidden lg:block">
 <HeroSlider{...settingsLG}>
    {images.map((image)=>(
            <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full "/>
            </div>
        )) }
    </HeroSlider>
    </div>
    </>
    );
};
export default HeroCarousal;