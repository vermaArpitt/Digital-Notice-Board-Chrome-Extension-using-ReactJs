import React from "react";
import './SlidesWidget.css';

const SlidesWidget = () =>
{
    return(
        <div className="slidesWidget">
            <iframe className="slides-iframe" src="https://docs.google.com/presentation/d/e/2PACX-1vR2j9xR1FhEfiWSXWWRcehjwR0NjmlMMLh8940QXFFiK-y9RH5nRLswrUGpESpiMF0tpQXcAWSFVTI_/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
    )
}

export default SlidesWidget;