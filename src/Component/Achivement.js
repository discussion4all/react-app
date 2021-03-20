import React, { useState } from "react";
import AchievementDetails from "../Component/AchievementDetails";
import Achidata from "../Component/AchievementData";
import AchiSliderDetails from "../Component/AchiSliderDetails";
import AchiSdata from "../Component/AchiSliderData";
import Slider from "react-slick";

const Achievement = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
    };
    const [isMouseOn, setIsMouseOn] = useState(false);
    const leave = () => {
        setIsMouseOn(false)
    }
    const enter = () => {
        setIsMouseOn(true)
    }
    return (

        <div className="container margint-200">
            <div className="row marginb-300">
                <div className="col-lg-9 col-sm-12" onMouseEnter={enter} onMouseLeave={leave}>
                    <div className="achiMain">
                        <AchievementDetails id={2} mouseEvent={isMouseOn}
                            number={Achidata[0].number}
                            title={Achidata[0].title}
                            subtitle={Achidata[0].subtitle}
                        />
                        <AchievementDetails
                            number={Achidata[1].number}
                            title={Achidata[1].title}
                            subtitle={Achidata[1].subtitle}
                        />
                        <AchievementDetails
                            number={Achidata[2].number}
                            title={Achidata[2].title}
                            subtitle={Achidata[2].subtitle}
                        />
                        <AchievementDetails
                            number={Achidata[3].number}
                            title={Achidata[3].title}
                            subtitle={Achidata[3].subtitle}
                        />
                        <AchievementDetails
                            number={Achidata[4].number}
                            title={Achidata[4].title}
                            subtitle={Achidata[4].subtitle}
                        />
                        <AchievementDetails
                            number={Achidata[5].number}
                            title={Achidata[5].title}
                            subtitle={Achidata[5].subtitle}
                        />
                        <AchievementDetails
                            number={Achidata[6].number}
                            title={Achidata[6].title}
                            subtitle={Achidata[6].subtitle}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 margint-200">
                    <div className="commonBtn d-flex justify-content-start">
                        <button className="btn btn-primary button1">免費咨詢</button>
                    </div>
                </div>
                <div className="col-lg-6 customPosition">
                <div className="overlay"></div>
                    <Slider {...settings}>
                        <AchiSliderDetails
                            imgsrc={AchiSdata[0].imgsrc}
                        />
                        <AchiSliderDetails
                            imgsrc={AchiSdata[1].imgsrc}
                        />
                        <AchiSliderDetails
                            imgsrc={AchiSdata[2].imgsrc}
                        />
                        <AchiSliderDetails
                            imgsrc={AchiSdata[3].imgsrc}
                        />
                        <AchiSliderDetails
                            imgsrc={AchiSdata[4].imgsrc}
                        />
                        <AchiSliderDetails
                            imgsrc={AchiSdata[5].imgsrc}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default Achievement;