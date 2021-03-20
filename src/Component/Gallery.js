import React from 'react'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_4 from '../Assest/images/slider-4.jpg'
function GridSlider() {
var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
appendDots: dots => (
    <div
      style={{
      
        padding: "10px"
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "30px",
        color: "#1a1a1aa3"
      }}
    >
      {i + 1}
    </div>
  )
};
return (
<Slider {...settings}>
   <div className="good-box">
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      
   </div>
   <div className="good-box">
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      
   </div>
   <div className="good-box">
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label">
                  Free
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>
    
      <div className="box-1">
         <div className="com-img">
            <div className="img-fbox">
               <img src={slider_4} />
            </div>
            <div className="label-box">
               <div className="label lable-3">
               Expired
               </div>
            </div>
            <div className="date-bar">
                  <span>Nov 28, 2020</span>|
                  <span>11:00 – 12:30</span>
               </div>
         </div>
         <h4>2021 British University</h4>
         <p>Strategy book and personal <br/>  recommendation letter writing skills</p>
      </div>

      
   </div>

</Slider>
);
}
export default GridSlider;