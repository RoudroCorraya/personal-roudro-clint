import React from 'react';
import image from '../../../assets/image/bannerImage/supper.webp';

import './Portfolio.css'

const Portfolio = () => {
    return (
        <div>
            <div class="circle-container">
                <image src={image} alt="Image" class="image"/>
                    <div class="rotating-circle"></div>
            </div>
            

        </div>
    );
};

export default Portfolio;