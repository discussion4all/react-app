import React, { useEffect, useState } from 'react';

function Slider3Details(props) {

    const [hovered, setHovered] = useState(false);
    const [hovered4, setHovered4] = useState(false);

    const toggleHover = () => {
        setHovered4(false)
        setHovered(!hovered)
    };
    useEffect(() => {

        if (props.id === 1 && props.mouseEvent === false) {
            setHovered4(true)
        }
        if (props.id === 1 && props.mouseEvent === true) {
            setHovered4(false)
        }
    }, [props])


    return (
        <div className={`option ${hovered || hovered4 ? 'active' : ' '}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
        <img src={props.imgsrc}/>  
        <div className="topLabel">
                <p className="topLabelText">{props.topText1}</p>
                <p className="topLabelText">{props.topText2}</p>
                <p className="topLabelText">{props.topText3}</p>
                <p className="topLabelText">{props.topText4}</p>
                <p className="topLabelText">{props.topText5}</p>
            </div>
            <div className="label">
                <p className="labelText">{props.bottomText1}</p>
                <p className="labelText">{props.bottomText2}</p>
                <p className="labelText">{props.bottomText3}</p>
            </div>
        </div>
    );
};

export default Slider3Details;