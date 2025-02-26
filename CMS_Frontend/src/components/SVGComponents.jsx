const SVGComponents = ({ svgImage,light }) => {
    let embeddedImage = "";

    switch (svgImage) {
        case "Alarm":
            embeddedImage = "/Alarm.png";
            break;
        case "Certified":
            embeddedImage = "/Certified.png";
            break;
        case "Level":
            embeddedImage = "/Level.png";
            break;
        case "Join":
            embeddedImage = "/Join.png";
            break;
        case "Star":
            embeddedImage = "/Star.png";
            break;
        default:
            console.warn(`Unknown svgImage: ${svgImage}`);
    }


    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill={`${light ? "#E1E1DD" : "#3B3B3B"}`} stroke={`${light ? "#3B3B3B" : "#E1E1DD"}`} />
                <rect x="4" y="4" width="16" height="16" fill={`url(#pattern${svgImage})`} />
                <defs>
                    <pattern id={`pattern${svgImage}`} patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref={`#${svgImage}`} transform="scale(0.01)" />
                    </pattern>
                    <image id={svgImage} width="100" height="100" preserveAspectRatio="none" xlinkHref={embeddedImage} />
                </defs>
            </svg>
        </>
    );
}

export default SVGComponents;
