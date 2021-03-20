import React, { useEffect, useState } from 'react';

const AchievementDetails = (props) => {
    const [hovered, setHovered] = useState(false);
    const [hovered3, setHovered4] = useState(false);

    const toggleHover = () => {
        setHovered4(false)
        setHovered(!hovered)
    };
    useEffect(() => {

        if (props.id === 2 && props.mouseEvent === false) {
            setHovered4(true)
        }
        if (props.id === 2 && props.mouseEvent === true) {
            setHovered4(false)
        }
    }, [props])

    return (
        <div className={`achiContent ${hovered || hovered3 ? 'active' : ' '}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <div className="listText goldColor pointer">{props.number}</div>
            <div className="achiSubcontent">
                <p className="title blackColor">{props.title}</p>
                <p className="subtitle goldColor">{props.subtitle}</p>
            </div>
        </div>
    );
}
export default AchievementDetails;