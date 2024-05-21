import React from 'react'
import React, { useState, useEffect } from 'react';

const Slider = () => {
    const files = ['./BackgroundImage.js', './BackgroundImage.js', './BackgroundImage.js'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % files.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, files.length]);

    return ( <
        div classNmae = "image-silder" >
        <
        img src = { files[currentIndex] }
        alt = {}
        /> <
        /div>
    )
}

export default Slider