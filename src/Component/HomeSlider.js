import Slider from "react-slick"; 
import {Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from '../Assest/images/slider-1.png'
import slider_2 from '../Assest/images/slider-2.png'
import slider_3 from '../Assest/images/slider-3.png'
import slider_4 from '../Assest/images/slider-4.jpg'
import slider_5 from '../Assest/images/slider-5.png'
import slider_6 from '../Assest/images/slider-6.png'
import slider_7 from '../Assest/images/slider-7.png'
import Gallery from "./Gallery"
import { useState } from "react";

const HomeSlider = () =>{
return(
<div>
   <AutoPlay />
</div>
)
} 
const AutoPlay = () => {
   const [sliderStyle, setSliderStyle] = useState('auto');
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed:0,
      pauseOnHover:false,
      pauseOnFocus:false,
      cssEase: "linear",

      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 767,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             initialSlide: 3
           }
         },
         {
            breakpoint:576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
         {
           breakpoint: 400,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]

      };

return (
<div className="first-slider">
   {sliderStyle === 'auto' && <Slider {...settings}>
      <div className="slider-colum">
         <div className="slider-mbox">
            <div className="com-img">
               <div className="img-fbox">
                  <img src={slider_1} />
               </div>
               <div className="label-box">
                  <div className="label">
                     Free
                  </div>
               </div>
              
            </div>
            <h4>2021英國大學</h4>
            <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
         <div className="slider-mbox mbox-1">
            <div className="com-img">
               <div className="img-fbox img-fbox-1">
                  <img src={slider_2} />
               </div>
               <div className="label-box">
                  <div className="label">
                     Free
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
             <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
      </div>
      <div className="slider-colum">
         <div className="slider-mbox mbox-2">
            <div className="com-img">
               <div className="img-fbox img-fbox-1">
                  <img src={slider_3} />
               </div>
               <div className="label-box">
                  <div className="label">
                     Free
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
             <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
      </div>
      <div className="slider-colum">
         <div className="slider-mbox">
            <div className="com-img">
               <div className="img-fbox">
                  <img src={slider_4} />
               </div>
               <div className="label-box">
                  <div className="label label-1">
                     Online
                  </div>
                  <div className="label">
                     Free
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
            <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
         <div className="slider-mbox mbox-3">
            <div className="com-img">
               <div className="img-fbox  img-fbox-2">
                  <img src={slider_5} />
               </div>
               <div className="label-box">
                  <div className="label">
                     Free
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
            <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
      </div>
      <div className="slider-colum">
         <div className="slider-mbox mbox-4">
            <div className="com-img img-fbox-3">
               <div className="img-fbox">
                  <img src={slider_6} />
               </div>
               <div className="label-box">
                  <div className="label label-1">
                     Online
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
             <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
      </div>
      <div className="slider-colum">
         <div className="slider-mbox">
            <div className="com-img">
               <div className="img-fbox">
                  <img src={slider_1} />
               </div>
               <div className="label-box">
                  <div className="label">
                     Free
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
             <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
         <div className="slider-mbox mbox-5">
            <div className="com-img img-fbox-4">
               <div className="img-fbox">
                  <img src={slider_7} />
               </div>
               <div className="label-box">
                  <div className="label label-1">
                     Online
                  </div>
               </div>
            </div>
            <h4>2021英國大學</h4>
             <p>Engineering & Computer Science <br/>工程學系及電腦科學系申請攻略</p>
            <h5>11:00 – 12:30</h5>
         </div>
      </div>
   </Slider>
}
   {sliderStyle === 'manual' && <div className="cus-container">
<div className="grid-slider">
<Gallery/>
</div>
</div>
}
   <div className="home-slider-btn">
   <button className={sliderStyle === 'auto' ? 'active-btn' : ''} onClick={() => setSliderStyle('auto')}>最新</button>
   <button className={sliderStyle === 'manual' ? 'active-btn' : ''} onClick={() => setSliderStyle('manual')}>講座</button>
</div>

</div>



);


}


export default HomeSlider;