import React from "react";
import './SlidesWidget.css';

const SlidesWidget = () =>
{
    // return(
    //     <div className="slidesWidget">
    //         <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR2j9xR1FhEfiWSXWWRcehjwR0NjmlMMLh8940QXFFiK-y9RH5nRLswrUGpESpiMF0tpQXcAWSFVTI_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    //     </div>
    // )

    const embedUrl = "https://docs.google.com/presentation/d/e/2PACX-1vR2j9xR1FhEfiWSXWWRcehjwR0NjmlMMLh8940QXFFiK-y9RH5nRLswrUGpESpiMF0tpQXcAWSFVTI_/embed?start=false&loop=false&delayms=3000";

    return (
        <div className="slidesWidget">
            <iframe 
            src={embedUrl} 
            className="slides-iframe"
            allowFullScreen
            title="Google Slides"
        ></iframe>
        </div>
    )
}

export default SlidesWidget;