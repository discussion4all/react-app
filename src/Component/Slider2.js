import React, { Component } from "react";
import Slider from "react-slick";
import SliderDetails from "./Slider2Details";
import Sdata from "../Component/Slider2Data";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}
class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "180px",
      slidesToShow: 4,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            centerPadding: "80px",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            centerPadding: "80px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0px",
          }
        }
      ]
    };
    return (
      <div className="container-fluid sliderContent margint-200">
        <Slider {...settings}>
          <SliderDetails
            imgsrc={Sdata[0].imgsrc}
            stitle={Sdata[0].stitle}
            subtitle={Sdata[0].subtitle}
          />
          <SliderDetails
            imgsrc={Sdata[1].imgsrc}
            stitle={Sdata[1].stitle}
            subtitle={Sdata[1].subtitle}
          />
          <SliderDetails
            imgsrc={Sdata[2].imgsrc}
            stitle={Sdata[2].stitle}
            subtitle={Sdata[2].subtitle}
          />
          <SliderDetails
            imgsrc={Sdata[3].imgsrc}
            stitle={Sdata[3].stitle}
            subtitle={Sdata[3].subtitle}
          />
          <SliderDetails
            imgsrc={Sdata[4].imgsrc}
            stitle={Sdata[4].stitle}
            subtitle={Sdata[4].subtitle}
          />
          <SliderDetails
            imgsrc={Sdata[5].imgsrc}
            stitle={Sdata[5].stitle}
            subtitle={Sdata[5].subtitle}
          />

        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;