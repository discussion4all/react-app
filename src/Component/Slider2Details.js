import React from "react";

function SliderDetails(props) {

  return (
    <div className="sliderImg hover hover-1 text-white rounded">
      <img src={props.imgsrc} ait="Slider" />
      <div className="hover-1-content ">
        <h3 className="hover-1-title mb-0 text-left">{props.stitle}</h3>
        <p className="hover-1-description mb-0 text-left">{props.subtitle}</p>
      </div>
    </div>

  );
}
export default SliderDetails;