import React, { useState } from "react";
import Slider3Details from "./Slider3Details";
import S3data from "../Component/Slider3Data";

function ExpandingCard() {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const leave = () => {
        setIsMouseOn(false)
    }
    const enter = () => {
        setIsMouseOn(true)
    }
    return (
        <div className="container-fluid sliderContent expandContent options margint-200" onMouseEnter={enter} onMouseLeave={leave}>
            <Slider3Details id={1} mouseEvent={isMouseOn}
                imgsrc={S3data[0].imgsrc}
                topText1={S3data[0].topText1}
                topText2={S3data[0].topText2}
                bottomText1={S3data[0].bottomText1}
                bottomText2={S3data[0].bottomText2}
                bottomText3={S3data[0].bottomText3}
            />
            <Slider3Details
                imgsrc={S3data[0].imgsrc}
                topText1={S3data[1].topText1}
                topText2={S3data[1].topText2}
                topText3={S3data[1].topText3}
                topText4={S3data[1].topText4}
                topText5={S3data[1].topText5}
                bottomText1={S3data[0].bottomText1}
                bottomText2={S3data[0].bottomText2}
                bottomText3={S3data[0].bottomText3}

            />
            <Slider3Details
                imgsrc={S3data[0].imgsrc}
                topText1={S3data[2].topText1}
                topText2={S3data[2].topText2}
                topText3={S3data[2].topText3}
                topText4={S3data[2].topText4}
                topText5={S3data[2].topText5}
                bottomText1={S3data[0].bottomText1}
                bottomText2={S3data[0].bottomText2}
                bottomText3={S3data[0].bottomText3}
            />
            <Slider3Details
                imgsrc={S3data[0].imgsrc}
                topText1={S3data[3].topText1}
                topText2={S3data[3].topText2}
                topText3={S3data[3].topText3}
                topText4={S3data[3].topText4}
                bottomText1={S3data[0].bottomText1}
                bottomText2={S3data[0].bottomText2}
                bottomText3={S3data[0].bottomText3}
            />
            <Slider3Details
                imgsrc={S3data[0].imgsrc}
                topText1={S3data[4].topText1}
                topText2={S3data[4].topText2}
                topText3={S3data[4].topText3}
                bottomText1={S3data[0].bottomText1}
                bottomText2={S3data[0].bottomText2}
                bottomText3={S3data[0].bottomText3}
            />
        </div>
    );

}
export default ExpandingCard;